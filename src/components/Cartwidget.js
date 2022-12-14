import { Link } from 'react-router-dom'
import { CartContext } from "./CartContext";
import { useContext } from 'react';
import './styles/Cartwidget.css';


const CartWidget = () => {

    const cctx = useContext(CartContext);

    return (
        <>
            <div className="Cart">
                <Link to='/cart' className='cartNavbar'>
                    <img src= { 'https://firebasestorage.googleapis.com/v0/b/react-sneaker-51ace.appspot.com/o/carrito%20blanco.png?alt=media&token=211fc884-510d-4e6f-b6d8-e18ab3bd792d' } className="Img-cart" alt="buy cart"/>
                    {
                        cctx.totalItems() === 0

                        ? <span></span>

                        : <span><p className='cant-cart'>{cctx.totalItems()}</p></span>
                    }
                    
                </Link>
            </div>
        </>
    );
}

export default CartWidget;