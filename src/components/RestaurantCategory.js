//  receiving data here from RestaurantMenu where we created categories.map
const RestaurantCategory = ({data}) => { 

    console.log(data)

    return (
        <div>
            {/* header */}
            <div className="w-6/12 mx-auto my-4 p-4 bg-emerald-100 shadow-lg hover:bg-emerald-50 flex justify-between font-bold ">
                <span>{data.title}</span>
                <span>⬇️</span>
            </div>
            {/* Accordian menu */}
        </div>
    )
}

export default RestaurantCategory;