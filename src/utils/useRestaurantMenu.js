import { useEffect, useState } from "react";
// takes resId and gives restInfo
const useRestaurantMenu  = (resId) => 
{
    const [restInfo, setRestInfo] = useState(null); // using state variable to change value after api call

    // fetch data
    useEffect(() => {
        fetchData();
    }, []); // keeping [] empty as we want to fetch data only once

     
    const fetchData = async () => 
    {
        const data = await fetch();
        const json = await data.json();

        setRestInfo(json); // updating with data fetched from API
    }

    return restInfo;

}

export default useRestaurantMenu;