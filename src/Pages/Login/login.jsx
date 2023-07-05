import * as React from 'react';
import './login.css';
import { useState } from 'react';
import Image from './side.jpeg'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';

export default function SignIn() {

    const [login, setlogin] = useState('login')
    const [showError, setshowError] = useState(false)
    const [showLoginError, setshowLoginError] = useState(false)
    const [loginError, setloginError] = useState('')
    const [SignUpSuccessMessage, setSignUpSuccessMessage] = useState('Success !! Please login')
    const [showSignUpSuccessMessage, setshowSignUpSuccessMessage] = useState(false)
    const [error, seterror] = useState('')
    const [LoginName, setLoginName] = useState('')
    const [LoginPass, setLoginPass] = useState('')
    const [SignUpName, setSignUpName] = useState('')
    const [SignUpPass, setSignUpPass] = useState('')
    const [SignUpCPass, setSignUpCPass] = useState('')
    const navigate = useNavigate()

    function handleClick1() {
        console.log('click')
    }
    function handleClick2() {
        setlogin('signup');
    }
    function handleClick3() {
        setlogin('login');
    }
    function loginWithEmailPass(e) {
        e.preventDefault()
        if (LoginName != '' && LoginPass != '') {
            signInWithEmailAndPassword(auth, LoginName, LoginPass)
                .then((userCredential) => {
                    if (userCredential) {
                        setshowLoginError(false)
                        navigate('/Welcome')
                    }
                })
                .catch((error) => {
                    setloginError("Incorrect Email or Password")
                    setshowLoginError(true)
                })
        }
        else {
            setloginError("Please complete all fields")
            setshowLoginError(true)
        }
    }
    function signUpWithEmailPass(e) {
        e.preventDefault()
        if (SignUpPass != '' && SignUpName != '' && SignUpCPass != '') {
            if (SignUpPass.length > 5) {
                if (SignUpPass == SignUpCPass) {
                    createUserWithEmailAndPassword(auth, SignUpName, SignUpPass)
                        .then((userCredential) => {
                            console.log(userCredential);
                            if (userCredential){
                                setshowSignUpSuccessMessage(true)
                                setshowError(false)
                            }
                        })
                        .catch((error) => {
                            if (error.code == 'auth/email-already-in-use') {
                                seterror("Email already in use")
                                setshowError(true);
                            }

                            if (error.code == "auth/invalid-email") {
                                seterror("Enter a valid Email")
                                setshowError(true);
                            }
                        })
                }
                else {
                    seterror("Password do not Match")
                    setshowError(true);
                }
            }
            else {
                seterror("Password length should be more than 5 characters")
                setshowError(true);
            }
        }
        else{
            seterror("Please complete all fields")
            setshowError(true)
        }
    }

    return (
        <div className=' h-[100vh]'>
            <div className=' flex w-full h-full'>
                <div className='w-5/12  overflow-hidden bg-green-800'>
                    <img className='object-cover h-full w-full' src={Image} alt='1'></img>
                </div>
                <div className=' bg-slate-100 w-7/12'>
                    <div className='h-full flex justify-center items-center'>
                        <div className='flex justify-center items-center flex-col rounded-xl w-4/6 bg-white'>
                            <div className='my-6 flex flex-col items-center justify-center'>
                                <h1 className='text-3xl titlefont text-green-800'>Welcome</h1>
                                <p className='text-[.6em]'><small>The best collection of images are waiting for you</small></p>
                            </div>
                            {login == "login" && <div className='flex flex-col w-2/3'>
                                <input className='border focus:border-white focus:outline-none focus:outline-green-800 rounded-xl my-2 py-2 px-3 placeholder:text-xs' type='Email' placeholder='Email' onChange={(e) => {
                                    setLoginName(e.target.value)
                                }} />
                                <input className='border focus:border-white focus:outline-none focus:outline-green-800 rounded-xl my-1 py-2 px-3 placeholder:text-xs' type='Password' placeholder='Password' onChange={(e) => {
                                    setLoginPass(e.target.value)
                                }} />
                                {showLoginError && <div className='text-sm mx-3 text-red-600'><small>{loginError}</small></div>}
                                <button onClick={(e) => {
                                    loginWithEmailPass(e)
                                }} className='py-3 mt-5 text-xs cursor-pointer border bg-black text-white rounded-3xl hover:bg-white hover:text-black hover:border-black'>Log In</button>
                                <button onClick={() => { handleClick2() }} className='py-3 mt-2 mb-8 text-xs cursor-pointer border bg-green-800 text-white rounded-3xl hover:bg-white hover:text-green-800 hover:border-green-800'>Create an Account</button>
                            </div>}
                            {login == "signup" && <div className='flex flex-col w-2/3'>
                                <input className='border focus:border-white focus:outline-none focus:outline-green-800 rounded-xl my-1 py-2 px-3 placeholder:text-xs' type='Email' placeholder='Email' onChange={(e) => {
                                    setSignUpName(e.target.value)
                                }} />
                                <input className='border focus:border-white focus:outline-none focus:outline-green-800 rounded-xl my-1 py-2 px-3 placeholder:text-xs' type='Password' placeholder='Password' onChange={(e) => {
                                    setSignUpPass(e.target.value)
                                }} />
                                <input className='border focus:border-white focus:outline-none focus:outline-green-800 rounded-xl my-1 py-2 px-3 placeholder:text-xs' type='Password' placeholder='Confirm Password' onChange={(e) => {
                                    setSignUpCPass(e.target.value)
                                }} />
                                {showError && <div className='text-sm mx-3 text-red-600'><small>{error}</small></div>}
                                {showSignUpSuccessMessage && <div className='text-sm mx-3 text-green-600'><small>{SignUpSuccessMessage}</small></div>}
                                <button onClick={(e) => { signUpWithEmailPass(e) }} className='py-3 focus:outline-none focus:border-green-800 mt-4 text-xs cursor-pointer border bg-black text-white rounded-3xl hover:bg-white hover:text-black hover:border-black'>Sign Up</button>
                                <button onClick={() => { handleClick3() }} className='py-3 mt-2 mb-6 text-xs cursor-pointer border bg-green-800 text-white rounded-3xl hover:bg-white hover:text-green-800 hover:border-green-800'>Log In</button>
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