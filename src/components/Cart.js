import { useSelector } from "react-redux";
import ItemList from "./ItemList";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items)

    return(
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold m-2">Cart</h1>

            <button className="m-2 p-2 bg-black text-white rounded-lg">Clear Cart</button>

            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
}

export default Cart;