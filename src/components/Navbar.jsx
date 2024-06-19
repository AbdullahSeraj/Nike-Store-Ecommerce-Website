import React, { useContext } from 'react'
import logo from "../assets/logo.png"

import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

import { useNavigate } from 'react-router-dom';
import { NavContext } from '../context/NavContext';
import { CartNavContext } from '../context/CartNavContext';
import { CartContext } from '../context/CartContext';

function Navbar() {
    const navigate = useNavigate()
    const isActive = useContext(NavContext)

    const { toggleOpen } = useContext(CartNavContext);
    const { cartLength } = useContext(CartContext)

    return (
        <div className={`fixed left-0 top-0 right-0 z-40 ${isActive ? 'blur-effect-theme' : "bg-transparent "}`}>
            <div className='flex justify-between items-center w-[80%] mx-auto h-14'>

                <img src={logo} alt="" width={'50px'} className={`cursor-pointer ${isActive && 'brightness-0'}`} onClick={() => navigate('/')} />

                <div className='flex items-center gap-5'>
                    <AiOutlineSearch onClick={() => navigate('/products')} className={`text-[25px] cursor-pointer  ${isActive ? 'text-black' : 'text-white'}`} />
                    <AiOutlineHeart className={`text-[25px] cursor-pointer  ${isActive ? 'text-black' : 'text-white'}`} />
                    <div className='relative cursor-pointer' onClick={toggleOpen}>
                        <AiOutlineShopping className={`text-[25px] ${isActive ? 'text-black' : 'text-white'}`} />
                        <div className={`${isActive ? "bg-black text-white" : 'bg-white text-black'} rounded-full p-2 absolute -top-1 -right-2 w-4 h-4 text-[11px] font-semibold flex justify-center items-center`}>{cartLength()}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar