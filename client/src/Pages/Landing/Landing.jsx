import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Background from './backg.jpg'
import { FaExternalLinkAlt } from 'react-icons/fa'
import Card from '../../components/Card/Card'
import { useNavigate } from 'react-router-dom'
import { auth } from '../../firebase'
import { onAuthStateChanged } from 'firebase/auth'
import './Landing.css'
import sanityclient from '../../sanityclient'

export default function () {
    const navigate = useNavigate()
    const [currentUser, setcurrentUser] = useState();
    const [AllImages, setAllImages] = useState([]);

    onAuthStateChanged(auth, (user) => {
        setcurrentUser(user)
        console.log(currentUser);
    })
    if (currentUser != null)
        navigate('/Welcome')
    
    useEffect(() => {
        sanityclient.fetch(
            `*[_type == "Images"]{
                name,
                pescription,
                pmage{
                    asset->{
                        _id,
                        url
                    }
                },
                price
            }`
        ).then((data) => {setAllImages(data); console.log(data);})
        .catch(console.error);
    }, [])

    return (
        <div>
            {currentUser == null && <div>
                <Navbar/>
            <div id="greenBg" className='bg-green-900 h-[fit-content] relative mb-10'>

                <div id="paraContainer" className='p-20'>
                    <div className='flex flex-col justify-evenly  h-full'>
                        <div id="paraContainerHeading" className='text-7xl  text-white'>A {window.innerWidth < 480 && <br/> }perfect place for <br />Pictures enthusiast.</div>
                        <div id="paraContainerPara" className=' text-sm text-white font-thin my-5 '>Snapshoot is a platform that caters to users seeking copyright-free images for a wide range of purposes. It provides an extensive array of images that can be purchased, in addition to offering a diverse collection of over 100 copyright-free images.</div>
                        <div className=''>
                            <button className='text-white flex items-center gap-1 text-sm font-light hover:underline'>
                                <div>Learn More</div>
                                <FaExternalLinkAlt />
                            </button>
                        </div>
                    </div>
                </div>

                </div>
                <div id='secondSection' className='px-20 my-10'>
                    <div className='text-3xl font-semibold text-green-900 mb-5'>Todays Best Deals For You!</div>
                    <div className='flex gap-5 flex-wrap justify-between'>
                        {
                            AllImages.slice(0,3).map( e => {
                                return <Card name = {e.name} desc = {e.pescription} image = {e.pmage.asset.url} price = {e.price}/>
                            })
                        }
                        
                        
                    </div>
                </div>
                <div id='secondSection' className='px-20 my-10'>
                    <div className='text-3xl font-semibold text-green-900 mb-5'>Best Selling Pictures</div>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            AllImages.map( e => {
                                return <Card name = {e.name} desc = {e.pescription} image = {e.pmage.asset.url} price = {e.price}/>
                            })
                        }
                    </div>
                </div>

                <div></div>

            </div>}
        </div>
    )
}
