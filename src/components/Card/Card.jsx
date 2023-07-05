import React from 'react'

export default function Card() {
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
                    <button className='border border-green-900 px-4 py-2 mt-5 rounded-2xl text-sm hover:text-white hover:bg-green-900'>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}
