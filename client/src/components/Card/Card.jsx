import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { auth } from '../../firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./Card.css"

export default function Card(props) {
    const navigate = useNavigate()
    const [currentUser, setcurrentUser] = useState();
    const [loading, setloading] = useState(false);
    onAuthStateChanged(auth, (user) => {
        setcurrentUser(user)
    })
    function handleclick() {
        if (currentUser) {
            fetch("https://snapshoot-iota.vercel.app/create-checkout-session", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    items: [
                        { id: 1, quantity: 1, image: props.image, price: props.price, name: props.name}
                    ],
                }),
            })
                .then(res => {
                    if (res.ok) return res.json()
                    return res.json().then(json => Promise.reject(json))
                })
                .then(({ url }) => {
                    window.location = url
                })
                .catch(e => {
                    console.error(e.error)
                })
        }
        else {
            navigate('/login')
        }
    }
    return (
        <div id="cardContainer" className=' text-black w-[32%]'>
            <div>
                <div className='cardImageContainer flex rounded-t h-[30vh] overflow-hidden hover:cursor-cell'>
                    <img className='justify-center w-[100%] h-[120%] cardImage rounded-t hover:scale-125 transition-all duration-700' src={props.image}></img>
                </div>
            </div>
            <div className='desc'>
                <div className='bg-slate-50 p-2 rounded-b'>
                    <div className='flex justify-between'>
                        <div id="cardTitle" className='text-lg font-semibold'>{props.name}</div>
                        <div id="cardTitle" className='text-lg font-semibold text-green-800'>₹{props.price}</div>
                    </div>
                    <div id="cardDesc" className='text-sm  font-extralight'><small >{props.desc}</small></div>
                    <div className='rating flex my-1'>
                        {[1, 2, 3, 4, 5].map(e => {
                            return <AiFillStar id="cardDesc" color='rgb(20 83 45 / var(--tw-text-opacity))' />
                        })}
                    </div>
                    <button id="cardBtn" onClick={() => { handleclick() }} className='border border-green-900 px-4 py-2 mt-3 rounded-2xl text-sm hover:text-white hover:bg-green-900'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
