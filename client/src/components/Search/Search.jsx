import React, { useState } from 'react'
import './Search.css'

export default function Search() {
    const [searchKey, setsearchKey] = useState('')
    function handlechange(e){
        setsearchKey(e.target.value)
    }
    function handleClick(){
        console.log(searchKey);
    }
  return (
    <div id="searchBar" className='flex justify-center m-5 gap-2'>
        <input className='border px-5 py-1.5 w-1/2 rounded-lg outline-none focus:outline-green-800 focus:border-white' type="text" placeholder='search' onChange={(e)=>{handlechange(e)}}/>
        <button onClick={()=>{handleClick()}} className='bg-green-800 text-white px-5 rounded-xl'>Go</button>
    </div>
  )
}
