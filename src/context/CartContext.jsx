import React from 'react'
import { useEffect, useContext, useState, createContext } from 'react'

const CartContext = createContext();

export const useCart = () => {
    const context = useContext(CartContext);
    if(!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
}

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(() => {
        const saved = localStorage.getItem('cart');
        return saved ? JSON.parse(saved) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems]);

    const addtoCart = (product) => {
        setCartItems((prev) => {
            const exisiting=prev.find((item) => item.id === product.id);
            if(exisiting) {
                return prev.map((item) => {
                    if(item.id === product.id) {
                        return {...item, quantity: item.quantity +1}
                    }
                    else{
                        return item;
                    }
                })
            }
            return [...prev, {...product, quantity:1}]
        })
    }
    const removefromCart = (productId) => {
        setCartItems((prev) => {
            return prev.filter((item) =>{
                return item.id!== productId;
            })
        })
    }
    const updateCart = (productId, productquantity) => {
        if(productquantity <=0){
                removefromCart(productId);
                return;
            }
        setCartItems((prev) => {
            return prev.map((item) => {
                if(item.id === productId){
                    return {...item, quantity: productquantity}
                }
                else {
                    return item;
                }
            })
        })
    }
    const clearCart = () => {
        setCartItems([]);
    }
    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total+item.price*item.quantity,0);
    }
    const getCartCount = () => {
        return cartItems.reduce((count, item) => count+item.quantity, 0); 
    }
  return (
    <CartContext.Provider value={{cartItems, addtoCart, removefromCart, updateCart, clearCart, getCartTotal, getCartCount}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContext