import React, { useState } from 'react';
import './Login.css'
import '../SignUp/Register.css'
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init'
import { toast } from 'react-toastify'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { TiWarning } from 'react-icons/ti';
import Loading from '../SignUp/Loading/Loading';
import { sendPasswordResetEmail } from 'firebase/auth';
const Login = () => {
    const [modal, setModal] = useState(false)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [resetEmail, setResetEmail] = useState('')

    const navigate = useNavigate()
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    if (user) {

        navigate('/dashboard/home')
        toast.success('Login successfull', { toastId: 'login' })
    }
    const handleLogin = (event) => {
        event.preventDefault()

        signInWithEmailAndPassword(email, password)

    }
    const handleResetEmail = ()=>{
        if(resetEmail){
            sendPasswordResetEmail(auth, resetEmail)
            .then(()=>{
                toast.success('Password reset email sent')
                setModal(false)
            })
            .catch(()=> toast.error('Please check your email'))
        }

    }


    return (
        <>
            <div className='login-container'>

                <form onSubmit={handleLogin} className='login-form'>
                    <h1>Login Here</h1>
                    <input autoComplete='off' onBlur={(e) => setEmail(e.target.value)} type="text" placeholder='Email' name='email' required />
                    <input autoComplete='off' onBlur={(e) => setPassword(e.target.value)} type="password" placeholder='Password' name='password' required />
                    {error && <div className='error-container'>
                        <p className='error-message'><TiWarning className='warning-icon' />Wrong email or password</p>
                    </div>}
                    <p className='forgot' onClick={() => setModal(!modal)}>Forgot password ?</p>
                    <button disabled={loading} type='submit'>
                        {loading ? <Loading /> : <span>Login</span>}
                    </button>
                    <small className='text-center block pt-4'>don't have an account ? <Link className='signUp' to='/signUp'>Sign Up</Link></small>
                </form>

                <div className="right-side">

                    <img src="https://i.ibb.co/V2NkWgm/login-banner.png" alt="" />
                </div>


            </div>
            {modal &&
                <>
                    <div onClick={() => setModal(false)} className='forgotBackdrop'>
                    </div>
                    <div  className="forgotModal">
                        <input onBlur={(e)=>setResetEmail(e.target.value)} autoFocus type="text" placeholder='Write your email here' />
                        <button onClick={handleResetEmail}>Reset Password</button>
                    </div>
                </>
            }
        </>
    );
};

export default Login;