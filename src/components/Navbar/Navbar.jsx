import React from 'react'
import SignIn from '../../Pages/Login/login'
import { FaArrowCircleDown, FaShoppingCart, FaUserCircle } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidDownArrow } from "react-icons/bi";
import './Navbar.css'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

export default function Navbar(props) {
    const navigate = useNavigate()
    function handleclick(){
        document.getElementById('outdropdown').style.display = "block"
    }
    function SignOut(){
        signOut(auth)
        .then((msg) => {
            console.log(msg);
            navigate('/')
        })
    }

    return (
        <div className='h-[10vh] flex justify-center border-b'>
            <div className='relative flex items-center justify-between h-full w-[95%] '>
                <div className='bg-white flex items-center gap-3'>
                    <FaShoppingCart className='text-green-900 text-3xl' />
                    <div className='text-3xl text-green-800 font-semibold'>Snapshoot</div>
                </div>
                {(props.user == null) ? <div className='bg-white flex gap-3'>
                    <Link to='/login'><button className='bg-green-900 border border-green-900  text-white py-2 rounded px-6 hover:text-green-900 hover:bg-white text-sm'>Log In</button></Link>
                    <Link to='/login'>
                        <button className='bg-white border border-green-900 text-green-900 py-2 rounded px-6 hover:bg-green-900 hover:text-white text-sm'>Sign up</button></Link>
                </div>
                    :
                    <div onClick={()=>{handleclick()}} className='flex gap-2 items-center  border rounded-xl p-1 border-white hover:cursor-pointer hover:border-slate-300'>
                        <FaUserCircle />
                        <div className='text-sm'>{props.user.email.split('@')[0]}<BiSolidDownArrow className='inline w-4/12' />
                        </div>
                        <div id="outdropdown" onClick={()=>{
                            SignOut()
                        }} class="flex flex-col absolute bottom-0 border bg-slate-200 px-1 py-0.5 hidden hover:bg-slate-500">
                            <a href="#" className='text-[10px] '>Logout</a>
                        </div>


                    </div>}
            </div>

        </div>
    )
}
