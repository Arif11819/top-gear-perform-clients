import React, { useState } from 'react';
import './Login.css'
import '../SignUp/Register.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { toast } from 'react-toastify'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { TiWarning } from 'react-icons/ti';
const Login = ({ setModal }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loginError, setLoginError] = useState('')
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {

        navigate('/')
        toast.success('Login successfull')

        setModal(false)
    }
    const handleLogin = (event) => {
        event.preventDefault()

        signInWithEmailAndPassword(email, password)

    }
    console.log(error)


    return (
        <div className='login-container'>

            <form onSubmit={handleLogin} className='login-form'>
                <h1>Login Here</h1>
                <input autoComplete='off' onBlur={(e) => setEmail(e.target.value)} type="text" placeholder='Email' name='email' required />
                <input autoComplete='off' onBlur={(e) => setPassword(e.target.value)} type="password" placeholder='Password' name='password' required />
                {error && <div className='error-container'>
                    <p className='error-message'><TiWarning className='warning-icon' />User not found</p>
                </div>}

                <button type='submit'>Login</button>
                <small className='text-center block pt-4'>don't have an account ? <Link className='signUp' to='/signUp'>Sign Up</Link></small>
            </form>

            <div className="right-side">

                <img src="https://i.ibb.co/V2NkWgm/login-banner.png" alt="" />
            </div>


        </div>
    );
};

export default Login;