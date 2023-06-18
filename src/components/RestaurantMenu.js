import { useEffect } from "react";


const RestaurantMenu = () => {

    useEffect( () => {
        fetchMenu();
    }, []);

    const fetchMenu = async () => 
    {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8541536&lng=80.94478269999999&restaurantId=635227&submitAction=ENTER");
        const json = data.json();

        console.log(json);
    }
    return(
        <div className="menu">
            <h1>Restaurant Name</h1>
            <h2>Menu</h2>
            <ul>
                <li>Biryani</li>
                <li>Burgers</li>
            </ul>
        </div>
    )
}

export default RestaurantMenu;