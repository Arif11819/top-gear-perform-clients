import React, { useState } from 'react';
import './Login.css'
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
const Login = ({ setModal }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    if (loading) {
        console.log(loading)
    }
    if (user) {
        console.log(user)
        navigate('/')
        setModal(false)
    }
    const handleLogin = (event) => {
        event.preventDefault()

        signInWithEmailAndPassword(email, password)

    }



    return (
        <div className='login-container'>
            
            <form onSubmit={handleLogin} className='login-form'>
                <input autoComplete='off' onBlur={(e) => setEmail(e.target.value)} type="text" placeholder='Email' name='email' required />
                <input autoComplete='off' onBlur={(e) => setPassword(e.target.value)} type="password" placeholder='Password' name='password' required />
                <div className='register'>
                </div>
                <button type='submit'>Login</button>
            </form>

            <div className="right-side">

                side bar
            </div>


        </div>
    );
};

export default Login;