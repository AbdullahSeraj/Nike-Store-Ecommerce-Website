import { useContext } from "react"
import { CartContext } from "../context/CartContext"

import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { RiDeleteBinLine } from "react-icons/ri";

export default function Cart() {
    const { cart, deleteFromCart, decreaseAmount, increaseAmount, totalCart } = useContext(CartContext)

    return (
        <div className="text-center">
            <div className="pt-[56px] bg-blue-500 mb-10"></div>

            <div className="mb-[56px]">
                <table className="mx-auto w-[95%]">
                    <thead>
                        <tr>
                            <th className="border-b-2 border-slate-400">Product</th>
                            <th className="border-b-2 border-slate-400">Title</th>
                            <th className="border-b-2 border-slate-400">Text</th>
                            <th className="border-b-2 border-slate-400">Price</th>
                            <th className="border-b-2 border-slate-400">Amount</th>
                            <th className="border-b-2 border-slate-400">Total</th>
                            <th className="border-b-2 border-slate-400">Delete</th>
                        </tr>
                    </thead>

                    <tbody>
                        {cart.map((item, i) => {
                            return <tr key={i}>
                                <td className="py-5 border-b-2"><img src={item.img} width={'100px'} alt="" className="mx-auto" /></td>
                                <td className="py-5 border-b-2"><p>{item.title}</p></td>
                                <td className="py-5 border-b-2"><p>{item.text}</p></td>
                                <td className="py-5 border-b-2"><p>${item.price}</p></td>
                                <td className="py-5 border-b-2">
                                    <div className="flex gap-2 justify-center">
                                        <FaPlus onClick={() => increaseAmount(item.id)} className="bg-black rounded-md p-1 text-white text-[20px] cursor-pointer w-6 h-6" />
                                        <p className="bg-black rounded-md p-1 text-white w-6 h-6 flex justify-center items-center">{item.amount}</p>
                                        <FaMinus onClick={() => decreaseAmount(item.id)} className="bg-black rounded-md p-1 text-white text-[20px] w-6 h-6 cursor-pointer" />
                                    </div>
                                </td>
                                <td className="py-5 border-b-2"><strong>${item.price * item.amount}</strong></td>
                                <td className="py-5 border-b-2">
                                    <RiDeleteBinLine className="mx-auto bg-black rounded-md p-1 text-white text-[25px] cursor-pointer" onClick={() => deleteFromCart(item.id)} />
                                </td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

            <div className="mx-auto w-[95%]">
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

                <button className="block w-1/2 mx-auto mt-2 mb-10 bg-red-500 hover:bg-red-600 transition-all text-white rounded-lg py-2">Check Out</button>
            </div>
        </div>
    )
}