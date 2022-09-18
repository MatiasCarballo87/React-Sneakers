import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [ cartView, setCartView ] = useState([]);

    const addItem = (item, cant) => {
        let infoCart = {
            ...item,
            cant
        }

        let isInCart = (id) => {
            return cartView.find(newItem => newItem.id === id)
        }

        if (!isInCart(item.id))  {
            setCartView([
                ...cartView,
                infoCart
            ])
        }else {
            let newInfoCart = cartView.map(newItem => {
                if(newItem.id === item.id) {
                    let newItemCart = {
                        ...newItem, cant: newItem.cant + cant
                    }
                    return newItemCart
                }
            })
            setCartView(newInfoCart)
        }

    };

    const removeItem = (id) => {
        let newCartView = cartView.filter( item => item.id !== id)
        setCartView(newCartView)
    };

    const clear = () => {
        setCartView([])
    };

    const totalItems = () => {
        let cants = cartView.map(item => item.cant);
        return cants.reduce(((prev, curr) => prev + curr), 0)
    }

    const totalCart = () => {
        return cartView.reduce((acc, item) => acc + item.price * item.cant, 0)
    };

    return (
        <CartContext.Provider value={{cartView, addItem, removeItem, clear, totalItems, totalCart}}>
            {children}
        </CartContext.Provider>
    );

    
}

export default CartContextProvider;