import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import './styles/ItemDetail.css';

const ItemDetail = ({item}) => {
    const [itemCount, setItemCount] = useState(0);

    const cctx = useContext(CartContext);

    const onAdd = (cant) => {
        alert("Añadiste " + cant + " " + item.name + " al carrito.");
        setItemCount(cant);
        cctx.addItem(item, cant);
    }

    return (
        <div className="card-big">
            <div className="content-img">
                <img src={item.image} className="img-card-big" alt="" />
            </div>
            <div className="contentDesc">
                <div className="cardName">
                    <h3>{item.name}</h3>
                </div>
                <div className="cardDesc">
                    <p>{item.description}</p>
                </div>
                <div className="cardPrice">
                    <p className="pPrice">${item.price}</p>
                </div>
                <div className="cardStock">
                    <p><strong>Stock: </strong>{item.stock}</p>
                </div>
                {
                    itemCount === 0
                    ? <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd}/>
                    : <div className="btn-cart-cont"><Link to='/cart' className="cont-check"><button className="btn-cart">Check Out</button></Link></div>
                }
            </div>
        </div>
    )
}
export default ItemDetail;