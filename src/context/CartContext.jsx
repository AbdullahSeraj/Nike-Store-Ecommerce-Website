import { createContext, useState } from "react"

export const CartContext = createContext();

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);

    function addToCart(product) {
        const newItem = { ...product, amount: 1 };

        const cartItem = cart.find((item) => {
            return item.id === product.id;
        });

        if (cartItem) {
            const newCart = cart.map(item => {
                if (item.id === product.id) {
                    return { ...item, amount: cartItem.amount + 1 }
                } else {
                    return item;
                }
            })
            setCart(newCart)
        } else {
            setCart([...cart, newItem]);
        }
    }

    function deleteFromCart(id) {
        setCart(cart.filter(item => item.id !== id))
    }

    function increaseAmount(id) {
        const newCart = cart.map(item => {
            if (item.id === id) {
                return { ...item, amount: item.amount + 1 }
            } else {
                return item;
            }
        })
        setCart(newCart);
    }

    function decreaseAmount(id) {
        const decItem = cart.find(item => item.id === id);

        if (decItem.amount > 1) {
            const newCart = cart.map(item => {
                if (item.id === id) {
                    return { ...item, amount: item.amount - 1 }
                }
                else {
                    return item;
                }
            })
            setCart(newCart)
        } else {
            deleteFromCart(id);
        }
    }

    function clearAll() {
        setCart([]);
    }

    function totalCart() {
        let total = 0;
        cart.map(item => {
            total += (Number(item.price) * item.amount);
        })

        return total;
    }

    function cartLength() {
        let count = 0;
        cart.map(item => {
            count += item.amount;
        })
        return count;
    }

    return (
        <CartContext.Provider value={{ cart, addToCart, deleteFromCart, decreaseAmount, increaseAmount, clearAll, totalCart, cartLength }}>
            {children}
        </CartContext.Provider>
    )
}