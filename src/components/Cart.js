import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';

const Cart = () => {
    const view = useContext(CartContext);

    if (view.totalItems() > 0){
    return  (
        <>
            <section>
                <h2 className="yourCart">YOUR CART</h2>
                <div className="alphaContainer"> 
                    <div>
                    {
                        view.cartView.map( item => 
                        <>
                            <div className="cartContainer">
                                <div class="table">
                                    <table>
                                        <tbody id="tbody">
                                            <tr>
                                                <td><img className="imageCart"src={item.image}/></td>
                                                <td><strong>Product:</strong> {item.name}</td>
                                                <td>$ {item.price}</td>
                                                <td><strong>Items:</strong> {item.cant}</td>
                                                <td><strong>SubTotal:</strong> ${item.cant * item.price}</td>
                                                <td><button onClick={() => view.removeItem(item.id)}>Delete</button></td>
                                            </tr>
                                        </tbody>
                                    </table>    
                                </div>
                            </div>
                        </>
                        )
                    }
                    </div>
                    <div className="cardCheckOut">
                        <h4>ORDER SUMARY</h4>
                        <div className="space"></div>
                        <div className="subTotal">
                            <span>Subtotal</span>
                            <p className="p">$ {view.totalCart()}</p>
                        </div>
                        <div className="taxes">
                            <span>Taxes</span>
                            <p className="p">$ 0</p>
                        </div>
                        <div className="space"></div>
                        <div className="orderTotal">
                            <span>Order Total</span>
                            <p className="p">$ {view.totalCart()}</p>
                        </div>
                        <button>PLACE ORDER</button>
                    </div>
                </div>
                <div className="removeAll"><button onClick={view.clear}>Remove All</button></div>
            </section>
        </>
    )  
}else{
    return(
        <>
        <h2 className="empty">Your cart is empty</h2>
        <Link to='/'><button className="continue">Continue Shipping</button></Link>
        </>
    )
}
}

export default Cart;