import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from 'react-router-dom';
import { serverTimestamp, setDoc, doc, collection, updateDoc, increment } from "firebase/firestore";
import { db }from '../utils/firebaseConfig';

const Cart = () => {
    const cctx = useContext(CartContext);

    const createOrder = () => {
        let itemsDB = cctx.cartView.map(item => ({
            id: item.id,
            title: item.name,
            price: item.price,
            cant: item.cant,
            subtotal: item.price * item.cant
        }))
        let order = {
            buyer: {
                name: "Darth Vader",
                email: "darth@starwars.com",
                phone: "987654321"
            },
            date: serverTimestamp(),
            items: itemsDB,
            total: cctx.totalCart()
        }

        const createOrderInFS = async () => {
            const newOrderRef = doc(collection(db, "orders"));
            await setDoc(newOrderRef, order);
            return newOrderRef;
        }

        createOrderInFS()
            .then(result => {alert('Success! Your order is:' + result.id)
            cctx.cartView.forEach(async(item) => {
                const itemRef = doc(db, "products", item.id);
                await updateDoc(itemRef, {
                    stock: increment(-item.cant)
                });
            })
            cctx.clear()
        })
        .catch(err => console.log(err))    
    }

    if (cctx.totalItems() > 0){
    return  (
        <>
            <section>
                <h2 className="yourCart">YOUR CART</h2>
                <div className="alphaContainer"> 
                    <div>
                    {
                        cctx.cartView.map( item => 
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
                                                <td><button onClick={() => cctx.removeItem(item.id)}>Delete</button></td>
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
                            <p className="p">$ {cctx.totalCart()}</p>
                        </div>
                        <div className="taxes">
                            <span>Taxes</span>
                            <p className="p">$ 0</p>
                        </div>
                        <div className="space"></div>
                        <div className="orderTotal">
                            <span>Order Total</span>
                            <p className="p">$ {cctx.totalCart()}</p>
                        </div>
                        <button onClick={createOrder}>PLACE ORDER</button>
                    </div>
                </div>
                <div className="removeAll"><button onClick={cctx.clear}>Remove All</button></div>
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