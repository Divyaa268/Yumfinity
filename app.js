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

const RestaurantCards = (props) => {
    const {resData} = props;

    return (
        <div className="res-cards" style={styleCard}> 
            <img className ="res-logo" alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + resData.data.cloudinaryImageId} />
            {/* <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4> */}
            <h3>{resData.data.name}</h3>
            <h4>{resData.data.avgRating}</h4>
            <h4>{resData.data.deliveryTime + " minutes"}</h4>
            <h4>{resData.data.cuisines.join(", ")}</h4>
        </div>
    )
};

// we can also do the above code by destructuring it -
// const RestaurantCards = ({resName, cuisine}) => {
    // ...
    // <h3>{resName}</h3>
    // <h4>{cuisine}</h4>


    const restaurantObj = {
                "type": "restaurant",
                "data": {
                  "type": "F",
                  "id": "322324",
                  "name": "Biryani Blues",
                  "uuid": "39978f7d-442b-4e07-ab4c-71fcc52021e3",
                  "city": "10459",
                  "area": "Sector 72",
                  "totalRatingsString": "5000+ ratings",
                  "cloudinaryImageId": "aid8xbkoxozzaxje8hap",
                  "cuisines": [
                    "Biryani",
                    "Hyderabadi",
                    "Lucknowi",
                    "Kebabs",
                    "Desserts",
                    "Beverages"
                  ],
                  "tags": [
                    
                  ],
                  "costForTwo": 40000,
                  "costForTwoString": "₹400 FOR TWO",
                  "deliveryTime": 35,
                  "minDeliveryTime": 35,
                  "maxDeliveryTime": 35,
                  "slaString": "35 MINS",
                  "lastMileTravel": 5,
                  "slugs": {
                    "restaurant": "biryani-blues-sector-50-sector-50",
                    "city": "noida-1"
                  },
                  "cityState": "10459",
                  "address": "Shop no. 4, Ground Floor, Sunder Farm House  & Shopping Complex, Sarafabad Village, Noida Sector -73",
                  "locality": "Sarfabad",
                  "parentId": 13813,
                  "unserviceable": false,
                  "veg": false,
                  "select": false,
                  "favorite": false,
                  "tradeCampaignHeaders": [
                    
                  ],
                  "ribbon": [
                    {
                      "type": "PROMOTED"
                    }
                  ],
                  "chain": [
                    
                  ],
                  "feeDetails": {
                    "fees": [
                      {
                        "name": "distance",
                        "fee": 5400,
                        "message": ""
                      },
                      {
                        "name": "time",
                        "fee": 0,
                        "message": ""
                      },
                      {
                        "name": "special",
                        "fee": 0,
                        "message": ""
                      }
                    ],
                    "totalFees": 5400,
                    "message": "",
                    "title": "Delivery Charge",
                    "amount": "5400",
                    "icon": ""
                  },
                  "availability": {
                    "opened": true,
                    "nextOpenMessage": "",
                    "nextCloseMessage": ""
                  },
                  "longDistanceEnabled": 0,
                  "rainMode": "NONE",
                  "thirdPartyAddress": false,
                  "thirdPartyVendor": "",
                  "adTrackingID": "cid=7025858~p=1~eid=00000188-a130-3092-0cff-4b3b0067010f",
                  "badges": {
                    "imageBased": [
                      
                    ],
                    "textBased": [
                      
                    ],
                    "textExtendedBadges": [
                      
                    ]
                  },
                  "lastMileTravelString": "5 kms",
                  "hasSurge": false,
                  "aggregatedDiscountInfoV3": {
                    "header": "₹125 OFF",
                    "subHeader": "ABOVE ₹249",
                    "discountTag": "FLAT DEAL",
                    "headerTypeV2": 0
                  },
                  "sla": {
                    "restaurantId": "322324",
                    "deliveryTime": 35,
                    "minDeliveryTime": 35,
                    "maxDeliveryTime": 35,
                    "lastMileTravel": 5,
                    "lastMileDistance": 0,
                    "serviceability": "SERVICEABLE",
                    "rainMode": "NONE",
                    "longDistance": "NOT_LONG_DISTANCE",
                    "preferentialService": false,
                    "iconType": "EMPTY"
                  },
                  "promoted": true,
                  "avgRating": "3.9",
                  "totalRatings": 5000,
                  "new": false
                },
                "subtype": "basic"
    };

const Body = ()=> {
    return(
        <div className="body">
            <div className="search">Search</div>
            <div className="restaurantComp">
                {/* adding props to components */}
                {/* <RestaurantCards resName="Tunday" cuisine="Mughlai, biryani, kebabs" />
                <RestaurantCards resName="KFC" cuisine="fast food, burger, bucket" /> */}
                <RestaurantCards resData={restaurantObj}/>
                {/* <RestaurantCards />
                <RestaurantCards /> */}
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