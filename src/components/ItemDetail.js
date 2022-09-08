import { useState } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);

    const onAdd = (cant) => {
        alert("Añadiste " + cant + " " + item.name + " al carrito.");
        setItemCount(cant);
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
                    {
                        itemCount === 0
                        ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                        : <div className="btn-cart-cont"><Link to='/cart' className="cont-check"><button className="btn-cart">Check Out</button></Link></div>
                    }
                </div>
            </div>
        </>

    )
}
export default ItemDetail;