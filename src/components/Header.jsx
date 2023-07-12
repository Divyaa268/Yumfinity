import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

// Functional component 
const Header = ()=>{

    const [ btnNameReact, setBtnNameReact ] = useState("Login");

    const onlineStatus = useOnlineStatus();

    return (<div className="flex justify-between bg-pink-200 shadow-xl sm:bg-red-500">
        <div className="logo-container">
            <img className="w-40" src ={LOGO_URL} />
        </div>
        <div className ="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className="p-4 font-bold">
                        Online Status: {onlineStatus? "✅" : "🔴" }
                    </li>
                    <li className="p-4 font-bold"> 
                        <Link to="/">Home</Link>
                    </li>
                    <li className="p-4 font-bold">
                        <Link to="/about">About Us</Link>
                    </li>
                    <li className="p-4 font-bold">
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li className="p-4 font-bold">
                        <Link to="/cart">Cart</Link>
                    </li>
                    <li className="p-4 font-bold">
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <button className="p-4 font-bold" onClick={() => {
                        btnNameReact == "Login"?
                            setBtnNameReact("Logout"): setBtnNameReact("Login") ;
                    }}> {btnNameReact} </button>
                </ul>
        </div>
    </div>
)
};

export default Header;