import React, { useState } from 'react';
import './LoginModal.css'
import { MdClose } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { TiWarning } from 'react-icons/ti'
const Modal = ({ setModal }) => {

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
    <div className='modal-backdrop'>
      <div data-aos="zoom-in" className="modal-container">
        <MdClose className='modal-close-icon' onClick={() => setModal(false)} />
        <div className="login-logo">
          <img src="https://i.ibb.co/f9ZDrz1/logo.png" alt="" />
        </div>
        <form onSubmit={handleLogin} className='login-form'>
          <h1 className='text-3xl text-center font-bold py-2'>Login Here</h1>
          <input autoComplete='off' onBlur={(e) => setEmail(e.target.value)} type="text" placeholder='Email' name='email' required />
          <input autoComplete='off' onBlur={(e) => setPassword(e.target.value)} type="password" placeholder='Password' name='password' required />
          <div className='register'>
            <p className=''>New to TopGear ? <Link onClick={() => setModal(false)} className='regis' to='/register'>Register</Link></p>
          </div>
          {error && <div className='error-container'>
            <p className='error-message'><TiWarning className='warning-icon' />Wrong email or password</p>
          </div>}
          <button type='submit'>Login</button>
        </form>
      </div>

    </div>
  );
};

export default Modal;