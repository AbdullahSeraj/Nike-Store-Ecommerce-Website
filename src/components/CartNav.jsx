import { RiArrowLeftDoubleFill } from "react-icons/ri";
import { MdClear } from "react-icons/md";
import { useContext } from "react";
import { CartNavContext } from "../context/CartNavContext";
import { CartContext } from "../context/CartContext";

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import emptyBag from "../assets/emptybag.png"

export default function CartNav() {
    const { isOpen, toggleOpen } = useContext(CartNavContext);
    const { cart, deleteFromCart, decreaseAmount, increaseAmount, clearAll, totalCart, cartLength } = useContext(CartContext)

    const navigate = useNavigate()

    return (
        <div className={`fixed top-0 right-full w-full h-full z-50 ${isOpen && 'left-0'} transition-all`}>
            <div className="absolute top-0 right-0 blur-effect-theme h-full w-full md:w-[470px]">
                <div className="flex justify-between items-center pb-4 mb-2 border-b-2 bg-white p-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <RiArrowLeftDoubleFill className="cursor-pointer text-[25px]" onClick={toggleOpen} />
                            <h3>Your Cart</h3>
                            <p className="bg-[#333] text-white rounded-md px-2">({cartLength()} Items)</p>
                        </div>
                    </div>
                    <div className="flex gap-1 bg-[#333] text-white rounded-md px-1 cursor-pointer" onClick={clearAll}>
                        <span>Clear All</span>
                        <MdClear className=" text-[23px]" />
                    </div>
                </div>

                {cart.length == 0 &&
                    <div className="flex justify-center items-center h-full flex-col gap-8">
                        <img src={emptyBag} alt="" width={'150px'} className="hover:scale-105 transition-all" />
                        <button onClick={toggleOpen} className="button-theme flex items-center gap-3 from-amber-500 to-orange-500 bg-gradient-to-b shadow-lg shadow-orange-500 rounded-md text-lg font-semibold px-3 py-1 active:scale-110"><FaArrowLeft />To Nike Store</button>
                    </div>
                }

                {cart.length &&
                    <div className="overflow-auto h-[55%] px-5">
                        {cart.map((item, i) => {
                            return <div key={i} className="flex justify-between gap-3 my-5">
                                <div className={`${item.shadow} ${item.color} bg-gradient-to-b rounded-lg p-3`}>
                                    <img src={item.img} alt="" width={'100px'} />
                                </div>

                                <div className="flex flex-1 flex-col">
                                    <h3 className="font-bold text-md">{item.title}</h3>
                                    <p className="text-gray-500 text-sm">{item.text}</p>
                                    <div className="flex gap-2">
                                        <FaPlus onClick={() => increaseAmount(item.id)} className="bg-black rounded-md p-1 text-white text-[20px] cursor-pointer w-6 h-6" />
                                        <p className="bg-black rounded-md p-1 text-white w-6 h-6 flex justify-center items-center">{item.amount}</p>
                                        <FaMinus onClick={() => decreaseAmount(item.id)} className="bg-black rounded-md p-1 text-white text-[20px] w-6 h-6 cursor-pointer" />
                                    </div>
                                </div>

                                <div className="flex flex-col justify-between items-end">
                                    <p className="font-semibold">${item.price}</p>
                                    <RiDeleteBinLine className="bg-black rounded-md p-1 text-white text-[25px] cursor-pointer" onClick={() => deleteFromCart(item.id)} />
                                </div>
                            </div>
                        })}
                    </div>
                }

                {cart.length &&
                    <div className="p-4">
                        <div className="flex justify-between mb-1">
                            <h3>Subtotal</h3>
                            <p>${totalCart()}</p>
                        </div>

                        <div className="flex justify-between mb-1">
                            <h3 className={`${totalCart() > 500 && "text-green-500"}`}>Divplar</h3>
                            <p className={`${totalCart() > 500 && "text-green-500"}`}>{totalCart() > 500 ? 'Free' : '$19'}</p>
                        </div>

                        <div className="flex justify-between mb-2">
                            <h3 className="font-semibold text-lg">Total</h3>
                            <p className="font-semibold text-lg">${totalCart() + (totalCart() > 500 ? 0 : 19)}</p>
                        </div>

                        <p className="text-center text-sm text-gray-400">Taxes and Shopping Will Cacluate At Shopping</p>

                        <button onClick={() => { navigate('cart'); toggleOpen(); window.scrollTo(0, 0) }} className="block w-full bg-[#333] hover:bg-[#111] transition-all text-white rounded-lg py-2 mb-3 mt-2">View Cart</button>
                        <button className="block w-full bg-red-500 hover:bg-red-600 transition-all text-white rounded-lg py-2">Check Out</button>
                    </div>
                }
            </div>

            <div className="absolute top-0 right-0 h-full w-full blur-effect-theme opacity-90 -z-10" onClick={toggleOpen}></div>
        </div>
    )
}