import React from "react";
import ReactDOM from "react-dom/client";

// Functional component 
const Header = ()=>{
    return (<div className="header">
        <div className="logo-container">
            <img className="logo" src ="https://png.pngtree.com/element_our/png_detail/20180913/food-point-logo-design-spoon-fork-and-pin-sign-logo-png_94919.jpg" />
        </div>
        <div className ="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
        </div>
    </div>
)
};

const Body = ()=> {
    return(
        <div className="body">
            <div className="search"> 

            </div>
            <div className="restaurantCards">

            </div>

        </div>
    )

}

const AppLayout = () =>{
    return (<div className="app">
            <Header/>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);