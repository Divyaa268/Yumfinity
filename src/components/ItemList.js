const ItemList = ({ items }) =>
{
    console.log(items);

    return(
        <div>
            {items.map((item) => (
                <div key={item.card.info.id} className="p-2 m-2 border-slate-300 border-b-2 text-left">
                    <div className="py-2">
                        <span className="p-2">{item.card.info.name}</span>
                        <span className="p-2 ">₹{ item.card.info.price ? ((item.card.info.price)/100) : ((item.card.info.defaultPrice)/100)}</span>
                    </div>
                    <p className="font-light text-xs m-3">{item.card.info.description}</p>
                </div>
            ))}
        </div>
    )
}

export default ItemList;