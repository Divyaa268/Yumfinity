// import { useState } from "react";
import { useState } from "react";
import ItemList from "./ItemList";

//  receiving data here from RestaurantMenu where we created categories.map
const RestaurantCategory = ({data}) => { 

    // console.log(data)

    const [ showItems, setShowItems ] = useState(false);

    const handleClick = () => {

        setShowItems(!showItems);

    }

    return (
        <div>
            {/* header */}
            <div className="w-6/12 mx-auto my-4 p-4 bg-emerald-100 shadow-lg hover:bg-emerald-50 ">
                <div className="flex justify-between  font-bold cursor-pointer" 
                onClick={handleClick}>
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                 {/* Accordian body menu */}
                { showItems && <ItemList items={ data.itemCards } /> }
            </div>
        </div>
    )
}

export default RestaurantCategory;