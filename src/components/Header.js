import { useState, useContext } from "react"
import {LOGO_URL} from "../utils/constants"
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {

    const [btnName, setBtnname] = useState("Login")
    const onlineStatus = useOnlineStatus()
    // const data = useContext(UserContext)
    const {loggedInUser} = useContext(UserContext)
    
    // subscribing to the store using useSelector() hook
    const cartItems = useSelector((store) => store.cart.items)
    // console.log(cartItems);

    return(
        <div className="flex justify-between bg-pink-100 shadow-lg">
            <div className="logo-container mx-8">
                <Link to='/'><img className="w-48 h-32 rounded-lg" src={LOGO_URL} /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-8">
                    <li className="px-4">Online Status: {onlineStatus ? '✅' : '🔴'}</li>
                    <li className="px-4"><Link to='/'>Home</Link></li>
                    <li className="px-4"><Link to ='/about'>About Us</Link></li>
                    <li className="px-4"><Link to ='/contact'>Contact Us</Link></li>
                    <li className="px-4"><Link to ='/grocery'>Grocery</Link></li>
                    <li className="px-4 font-bold text-xl"><Link to='/cart'>Cart - ({cartItems.length} items)</Link></li>
                    <button 
                    className="login"
                    onClick={() => {
                        btnName === 'Login' ? setBtnname('Logout') : setBtnname('Login')
                        // we cannot update the state of variable directly, that's why we use useState
                        // when a state of variable is changed, the whole component is rendered again!.
                        // Ex: console.log('rendered') will be logged in console.
                    }}
                    >{btnName}</button>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header