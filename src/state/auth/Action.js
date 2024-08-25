import axios from 'axios'
import { API_BASE_URL } from '../../config/ApiConfig'
import {
    GET_USER_FAILURE,
    GET_USER_REQUEST,
    GET_USER_SUCCESS,
    LOGIN_FAILURE,
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGOUT,
    REGISTER_FAILURE,
    REGISTER_REQUEST,
    REGISTER_SUCCESS,
} from './ActionType'

axios.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('jwt')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }
        return config
    },
    (error) => Promise.reject(error)
)

export const fetchUserData = () => async (dispatch) => {
    dispatch({ type: GET_USER_REQUEST })
    try {
        const response = await axios.get(`${API_BASE_URL}/user`)
        dispatch({ type: GET_USER_SUCCESS, payload: response.data })
    } catch (error) {
        dispatch({ type: GET_USER_FAILURE, payload: error.message })
    }
}

const registerRequest = () => ({ type: REGISTER_REQUEST })
const registerSuccess = (user) => ({ type: REGISTER_SUCCESS, payload: user })
const registerFailure = (error) => ({ type: REGISTER_FAILURE, payload: error })

export const register = (userData) => async (dispatch) => {
    dispatch(registerRequest())

    try {
        const response = await axios.post(
            `
            ${API_BASE_URL}/auth/signup`,
            userData
        )
        const user = response.data
        if (user.jwt) {
            localStorage.setItem('jwt', user.jwt)
        }
        console.log('Register Success Payload:', user)
        dispatch(registerSuccess(user.jwt))
    } catch (error) {
        dispatch(registerFailure(error.message))
    }
}

const loginRequest = () => ({ type: LOGIN_REQUEST })
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user })
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error })

const handleLoginSuccess = (jwt, dispatch) => {
    localStorage.setItem('jwt', jwt)
    dispatch(getUser()) // Fetch user data
}

export const login = (userData) => async (dispatch) => {
    dispatch({ type: LOGIN_REQUEST })

    try {
        const response = await axios.post(
            `${API_BASE_URL}/auth/signin`,
            userData
        )
        const { jwt } = response.data
        if (jwt) {
            handleLoginSuccess(jwt, dispatch)
            dispatch({ type: LOGIN_SUCCESS, payload: jwt })
            // console.log('Login Success Payload:', response.data)
        }
    } catch (error) {
        dispatch({ type: LOGIN_FAILURE, payload: error.message })
    }
}

const getUserRequest = () => ({ type: GET_USER_REQUEST })
const getUserSuccess = (user) => ({ type: GET_USER_SUCCESS, payload: user })
const getUserFailure = (error) => ({ type: GET_USER_FAILURE, payload: error })

export const getUser = (jwt) => async (dispatch) => {
    dispatch(getUserRequest())

    try {
        const response = await axios.get(`${API_BASE_URL}/api/users/profile`, {
            headers: {
                Authorization: `Bearer ${jwt}`,
            },
        })
        const user = response.data
        // console.log('User Data:', response.data)
        dispatch(getUserSuccess(user))
    } catch (error) {
        console.error(
            'Error fetching user:',
            error.response ? error.response.data : error.message
        )
        if (error.response) {
            console.error('Status:', error.response.status)
            console.error('Headers:', error.response.headers)
        }
        dispatch(getUserFailure(error.message))
    }
}

export const logout = () => (dispatch) => {
    localStorage.removeItem('jwt')
    dispatch({ type: LOGOUT })
    // Optionally redirect
    window.location.href = '/login' // or use react-router history.push('/login')
}
