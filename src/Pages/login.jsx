import * as React from 'react';
import './login.css';
import { useState } from 'react';
import Image from '../assets/images/side.jpeg'

export default function SignIn() {

    const [login, setlogin] = useState('login')
    function handleClick1() {
        console.log('click')
    }
    function handleClick2() {
        setlogin('signup');
    }
    function handleClick3() {
        setlogin('login');
    }

    return (
        <div className=' h-[100vh]'>
            <div className=' flex w-full h-full'>
                <div className='w-5/12  overflow-hidden'>
                    <img className='object-cover h-full w-full' src={Image} alt='1'></img>
                </div>
                <div className=' bg-slate-100 w-7/12'>
                    <div className='h-full flex justify-center items-center'>
                        <div className='flex justify-center items-center flex-col rounded-xl w-4/6 bg-white'>
                            <div className='my-6 flex flex-col items-center justify-center'>
                                <h1 className='text-2xl titlefont '>Welcome</h1>
                                <p className='text-[.6em]'><small>The best collection of images are waiting for you</small></p>
                            </div>
                            {login == "login" && <div className='flex flex-col w-2/3'>
                                <input className='border rounded-xl my-2 py-2 px-3 placeholder:text-xs' type='text' placeholder='Email' />
                                <input className='border rounded-xl my-1 py-2 px-3 placeholder:text-xs' type='text' placeholder='Password' />
                                <button className='py-2 mt-5 text-xs cursor-pointer border bg-black text-white rounded-3xl hover:bg-white hover:text-black hover:border-black'>Log In</button>
                                <button onClick={()=>{handleClick2()}} className='py-2 mt-2 mb-5 text-xs cursor-pointer border bg-orange-600 text-white rounded-3xl hover:bg-white hover:text-orange-600 hover:border-orange-600'>Create an Account</button>
                            </div>}
                            {login == "signup" && <div className='flex flex-col w-2/3'>
                                <input className='border rounded-xl my-2 py-2 px-3 placeholder:text-xs' type='text' placeholder='Email' />
                                <input className='border rounded-xl my-1 py-2 px-3 placeholder:text-xs' type='text' placeholder='Password' />
                                <input className='border rounded-xl my-1 py-2 px-3 placeholder:text-xs' type='text' placeholder='Confirm Password' />
                                <button className='py-2 mt-5 text-xs cursor-pointer border bg-black text-white rounded-3xl hover:bg-white hover:text-black hover:border-black'>Sign Up</button>
                                <button onClick={()=>{handleClick3()}} className='py-2 mt-2 mb-5 text-xs cursor-pointer border bg-orange-600 text-white rounded-3xl hover:bg-white hover:text-orange-600 hover:border-orange-600'>Log In</button>
                            </div>}
                            <div>
                                <p></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}