import { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () => {
    const view = useContext(CartContext);

    return (
        <>
            <h2 className="yourCart">YOUR CART</h2>
            {
                view.cartView.map( item => 
                <>
                    <section>
                        <div className="cartContainer">
                            <div class="table">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>PRODUCTO</th>
                                            <th>NOMBRE DEL PRODUCTO</th>
                                            <th>PRECIO</th>
                                            <th>CANTIDAD</th>
                                            <th>SUBTOTAL</th>
                                            <th></th>
                                        </tr>
                                    </thead>
                                    <tbody id="tbody">
                                        <tr>
                                            <td><img className="imageCart"src={item.image}/></td>
                                            <td>{item.name}</td>
                                            <td>{item.price}</td>
                                            <td>{item.cant}</td>
                                            <td>{item.cant * item.price}</td>
                                            <td><button onClick={() => view.removeItem(item.id)}>Delete</button></td>
                                        </tr>
                                    </tbody>
                                </table>    
                            </div>
                        </div>
                    </section>
                </>
                )
            }
            <div className="removeAll"><button onClick={view.clear}>Remove All</button></div>
        </>
    )
}

export default Cart;