import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {


    const onAdd = (cant) => {
        alert("Añadiste " + cant + " " + item.name + " al carrito.");
    }

    return (
        <>
            <div className="card-big">
                <div className="content-img">
                    <img src={item.image} className="img-card-big" alt="" />
                </div>
                <div className="card-desc-big">
                    <h3>{item.name}</h3>
                    <div className="price">
                        <p className="pprice">${item.price}</p>
                    </div>
                    <p>{item.description}</p>
                    <p><strong>Stock: </strong>{item.stock}</p>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                </div>
            </div>
        </>

    )
}
export default ItemDetail;