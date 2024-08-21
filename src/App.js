import './App.css'
import Navigation from '../src/customer/components/Navigation/Navigation'
import HomePage from './customer/pages/HomePage/HomePage'
import Footer from './customer/components/Footer/Footer'
import Product from './customer/components/Product/Product'
import ProductDetails from './customer/components/ProductDetails/ProductDetails'
import Cart from './customer/components/Cart/Cart'
import Purchase from './customer/components/Purchase/Purchase'
import Order from './customer/components/Order/Order'

function App() {
    return (
        <div className="">
            <Navigation />
            <div>
                {/* <HomePage /> */}
                {/* <Product /> */}
                {/* <ProductDetails /> */}
                {/* <Cart /> */}
                {/* <Purchase /> */}
                <Order />
            </div>
            <Footer />
        </div>
    )
}

export default App
