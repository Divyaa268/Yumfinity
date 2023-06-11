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

// JS Object
const styleCard = {
    backgroundColor: "#f0f0f0"
}

const RestaurantCards = () => {
    return (
        <div className="res-cards" style={styleCard}> 
            <img className ="res-logo" alt="res-logo" src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/uws6wm1xndcgtox6moif" />
            <h3>Tunday</h3>
            <h4>Biryani, Kebabs</h4>
            <h4>4.8 Stars</h4>
            <h4>28 minutes</h4>
        </div>
    )
};

const Body = ()=> {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurantComp">
                <RestaurantCards />
                <RestaurantCards />
                <RestaurantCards />
                <RestaurantCards />
                <RestaurantCards />
            </div>
        </div>
    )
};

const AppLayout = () =>{
    return (<div className="app">
            <Header/>
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);