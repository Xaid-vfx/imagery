import { onAuthStateChanged } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import { auth } from '../../firebase';
import { Navigate, useNavigate } from 'react-router-dom';

export default function Card() {
    const navigate = useNavigate()
    const [currentUser, setcurrentUser] = useState();
    onAuthStateChanged(auth, (user) => {
        setcurrentUser(user)
        })
    function handleclick(){
        if(currentUser){
            fetch("http://localhost:5500/create-checkout-session", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              items: [
                { id: 1, quantity: 1 }
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
        else{
            navigate('/login')
        }
    }
    return (
        <div className=' text-black w-4/12'>
            <div>
                <div className='rounded'>
                    <img className='rounded-t' src='https://www.adorama.com/alc/wp-content/uploads/2018/11/landscape-photography-tips-yosemite-valley-feature.jpg'></img>
                </div>
            </div>
            <div className='desc'>
                <div className='bg-slate-50 p-3 rounded-b'>
                    <div className='flex justify-between'>
                        <div className='text-lg font-semibold'>Landscape</div>
                        <div className='text-lg font-semibold text-green-800'>$20</div>
                    </div>
                    <div className='text-sm  font-extralight'><small>A description about the image</small></div>
                    <button onClick={()=>{handleclick()}} className='border border-green-900 px-4 py-2 mt-5 rounded-2xl text-sm hover:text-white hover:bg-green-900'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
