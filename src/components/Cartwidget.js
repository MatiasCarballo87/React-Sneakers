import cart from '../assets/carrito.png'

const CartWidget = () => {
    return (
        <>
            <div className="Cart">
                <img src= { cart } className="Img-cart" alt="carrito de compras"/>
                <span>
                    <p>2</p>
                </span>
            </div>
        </>
    );
}

export default CartWidget;