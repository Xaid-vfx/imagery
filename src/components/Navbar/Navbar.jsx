import React from 'react'
import SignIn from '../../Pages/Login/login'
import  {FaShoppingCart}  from "react-icons/fa";

export default function Navbar() {
    return (
        <div className='h-[10vh]  flex justify-center'>
            <div className='flex items-center justify-between h-full w-[95%] '>
                <div className='bg-white flex items-center gap-3'>
                    <FaShoppingCart className='text-green-900 text-3xl'/>
                    <div className='text-3xl text-green-800'>Shopping</div>
                </div>
                <div className='bg-white flex gap-3'>
                    <button className='bg-green-800 border border-green-800  text-white py-1.5 rounded px-4 hover:text-green-800 hover:bg-white'>Log In</button>
                    <button className='bg-white border border-green-800 text-green-800 py-1.5 rounded px-4 hover:bg-green-800 hover:text-white'>Sign up</button>
                </div>
            </div>

        </div>
    )
}
