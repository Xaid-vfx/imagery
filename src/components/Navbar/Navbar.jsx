import React from 'react'
import SignIn from '../../Pages/Login/login'
import  {FaShoppingCart}  from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function Navbar() {
    return (
        <div className='h-[10vh]  flex justify-center'>
            <div className='relative flex items-center justify-between h-full w-[95%] '>
                <div className='bg-white flex items-center gap-3'>
                    <FaShoppingCart className='text-green-900 text-3xl'/>
                    <div className='text-3xl text-green-800 font-semibold'>Snapshoot</div>
                </div>
                <div className='bg-white flex gap-3'>
                    <Link to='/login'><button className='bg-green-900 border border-green-900  text-white py-2 rounded px-6 hover:text-green-900 hover:bg-white text-sm'>Log In</button></Link>
                    <Link to='/login'>
                    <button className='bg-white border border-green-900 text-green-900 py-2 rounded px-6 hover:bg-green-900 hover:text-white text-sm'>Sign up</button></Link>
                </div>
            </div>

        </div>
    )
}
