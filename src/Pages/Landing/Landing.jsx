import React, { useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Background from './backg.jpg'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Card from '../../components/Card/Card'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'

export default function () {
    const navigate = useNavigate()
    const [currentUser, setcurrentUser] = useState();
    onAuthStateChanged(auth, (user) => {
        setcurrentUser(user)
        console.log(currentUser);
    })
    if (currentUser != null)
        navigate('/Welcome')
    return (
        <div>
            {currentUser && <div>
                <Navbar />
            <div className='bg-green-900 h-[60vh] relative'>

                <div className='p-20'>
                    <div>
                        <div className='text-7xl text-white'>A perfect place for <br />Pictures enthusiast.</div>
                        <div className='w-4/12 text-sm text-white font-thin my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus nesciunt, explicabo provident et esse minima nobis deserunt nostrum, excepturi est perferendis ipsa id illum! Perferendis dolore consequuntur labore qui eum.</div>
                        <div>
                            <button className='text-white flex items-center gap-1 text-sm font-light hover:underline'>
                                <div>Learn More</div>
                                <FaExternalLinkAlt />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='px-20 my-10'>
                    <div className='text-3xl font-semibold text-green-900 mb-5'>Todays Best Deals For You!</div>
                    <div className='flex gap-5'>
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>
                <div className='px-20 my-20'>
                    <div className='text-3xl font-semibold text-green-900 mb-5'>Best Selling Pictures</div>
                    <div className='flex gap-5'>
                        <Card />
                        <Card />
                        <Card />
                        <Card />
                    </div>
                </div>

                <div></div>

            </div></div>}
        </div>
    )
}
