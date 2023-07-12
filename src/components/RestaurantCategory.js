import ItemList from "./ItemList";

//  receiving data here from RestaurantMenu where we created categories.map
const RestaurantCategory = ({data}) => { 

    console.log(data)

    return (
        <div>
            {/* header */}
            <div className="w-6/12 mx-auto my-4 p-4 bg-emerald-100 shadow-lg hover:bg-emerald-50 ">
                <div className="flex justify-between  font-bold">
                    <span>{data.title} ({data.itemCards.length})</span>
                    <span>⬇️</span>
                </div>

                 {/* Accordian body menu */}
            <ItemList items={ data.itemCards } />
            </div>
        </div>
    )
}

export default RestaurantCategory;