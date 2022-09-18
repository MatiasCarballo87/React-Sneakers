import cart from '../assets/carrito blanco.png'
import { Link } from 'react-router-dom'
import { CartContext } from "./CartContext";
import { useContext } from 'react';


const CartWidget = () => {

    const view = useContext(CartContext);

    return (
        <>
            <div className="Cart">
                <Link to='/cart' className='cartNavbar'>
                    <img src= { cart } className="Img-cart" alt="carrito de compras"/>
                    {
                        view.totalItems() === 0

                        ? <span></span>

                        : <span><p className='cant-cart'>{view.totalItems()}</p></span>
                    }
                    
                </Link>
            </div>
        </>
    );
}

export default CartWidget;