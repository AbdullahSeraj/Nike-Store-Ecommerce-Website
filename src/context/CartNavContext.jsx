import { createContext, useState } from "react";


export const CartNavContext = createContext();

export default function CartNavProvider({ children }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleOpen() {
        setIsOpen(!isOpen);
    }

    return (
        <CartNavContext.Provider value={{ isOpen, toggleOpen }}>
            {children}
        </CartNavContext.Provider>
    )
}