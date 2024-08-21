import { Button, IconButton } from '@mui/material'
import React from 'react'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

const CartItem = () => {
    return (
        <div className="p-5 shadow-lg border rounded-md">
            <div className="flex items-center">
                <div className="w-[5rem] h-5[rem] lg:w-[9rem] lg:h-[9rem]">
                    <img
                        className="w-full h-full object-cover object-top"
                        src="../assets/images/1.jpg"
                        alt=""
                    />
                </div>
                <div className="ml-5 space-y-1">
                    <p className="font-semibold">Lorem, ipsum.</p>
                    <p className="opacity-70">Lorem, ipsum1.</p>
                    <p className="opacity-70 mt-2">Lorem, ipsum2.</p>

                    <div className="flex space-x-5 items-center text-gray-900 pt-6">
                        <p className="font-semibold ">$150</p>
                        <p className="opacity-50 line-through">$300</p>
                        <p className="text-green-600 font-semibold">50% off</p>
                    </div>
                </div>
            </div>
            <div className="lg:flex items-center lg:space-x-10 pt-4">
                <div className="flex items-center space-x-2">
                    <IconButton color="">
                        <RemoveCircleOutlineIcon />
                    </IconButton>
                    <span className="py-1 px-7 border rounded-sm">3</span>
                    <IconButton sx={{ color: '#2146db' }}>
                        <AddCircleOutlineIcon />
                    </IconButton>
                </div>
                <div>
                    <Button sx={{ color: '#c92828' }}>Remove</Button>
                </div>
            </div>
        </div>
    )
}

export default CartItem
