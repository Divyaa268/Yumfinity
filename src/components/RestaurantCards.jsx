

const RestaurantCards = (props) => {
    const {resData} = props;

    // optional chaining ?.
    const {cloudinaryImageId, name, avgRating, deliveryTime, cuisines  } = resData?.data;

    return (
        <div className="res-cards" style={styleCard}> 
            <img className ="res-logo" alt="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/" + cloudinaryImageId} />
            {/* <h3>{props.resName}</h3>
            <h4>{props.cuisine}</h4> */}
            {/* <h3>{resData.data.name}</h3>
            <h4>{resData.data.avgRating}</h4>
            <h4>{resData.data.deliveryTime + " minutes"}</h4>
            <h4>{resData.data.cuisines.join(", ")}</h4> */}

            {/* AFTER DOING OPTIONAL CHAINING */}
            <h3>{name}</h3>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime + " minutes"}</h4>
            <h4>{cuisines.join(", ")}</h4>
        </div>
    )
};

export default RestaurantCards;