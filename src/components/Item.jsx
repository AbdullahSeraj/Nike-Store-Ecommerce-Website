import { IoIosStar } from "react-icons/io";
import { HiShoppingBag } from "react-icons/hi2";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

export default function Item({ item, scale }) {
    const { addToCart } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <div className={`${item.shadow} ${item.color} text-white w-full flex justify-between p-6 relative bg-gradient-to-b rounded-lg group cursor-pointer hover:scale-[1.02] transition-all`}>
            <div className="">
                <h3 className="text-xl hover:underline" onClick={() => navigate(`/products/${item.id}`)}>{item.title}</h3>
                <p>{item.text}</p>
                <div className="mt-2 flex gap-4">
                    <span className="text-black bg-white rounded-md px-1">${item.price}</span>
                    <div className="flex items-center gap-1">
                        <IoIosStar className="text-[20px]" />
                        <span>{item.rating}</span>
                    </div>
                </div>
                <div className="flex gap-3 mt-4">
                    <HiShoppingBag className="bg-white rounded-lg text-black w-8 h-8 p-1 hover:bg-[#ddd] transition cursor-pointer" onClick={() => addToCart(item)} />
                    <button className="bg-white text-black rounded-md px-2 font-semibold hover:bg-[#ddd] transition">{item.btn}</button>
                </div>
            </div>
            <img src={item.img} alt="" className={`absolute -rotate-[30deg] group-hover:-rotate-[25deg] duration-500 transition-all top-1/2 -translate-y-1/2 right-5 w-[190px] sm:w-[280px] ${scale ? '-scale-x-100' : ''}`} />
        </div>
    )
}