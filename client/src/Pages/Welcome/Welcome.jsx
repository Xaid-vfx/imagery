import React, { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase';
import { Navigate, useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search';
import './Welcome.css'
import sanityclient from '../../sanityclient'

export default function Welcome(props) {
    const navigate = useNavigate()
    const [currentUser, setcurrentUser] = useState();
    const [AllImages, setAllImages] = useState([]);

    onAuthStateChanged(auth, (user) => {
        setcurrentUser(user)
        console.log(currentUser);
    })
    if (currentUser == null)
        navigate('/')

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
            {currentUser && <div>
                <Navbar user={currentUser} welcome={true} />
                <div>
                    <Search/>
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

                </div>
            </div>}
        </div>
    )
}
