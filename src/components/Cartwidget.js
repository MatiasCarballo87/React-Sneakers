import cart from '../assets/carrito blanco.png'

const CartWidget = () => {
    return (
        <>
            <div className="Cart">
                <img src= { cart } className="Img-cart" alt="carrito de compras"/>
                <span>
                    <p className='cant-cart'>2</p>
                </span>
            </div>
        </>
    );
}

export default CartWidget;