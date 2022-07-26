import React from 'react';
import './LoginModal.css'
import { MdClose } from 'react-icons/md';

import { Link } from 'react-router-dom';
const Modal = ({ setModal }) => {
    return (
        <div className='modal-backdrop'>
            <div data-aos="zoom-in" className="modal-container">
                <MdClose className='modal-close-icon' onClick={() => setModal(false)} />
                <div className="login-logo">
                    <img src="https://i.ibb.co/f9ZDrz1/logo.png" alt="" />
                </div>
                <form className='login-form'>
                    <h1 className='text-3xl text-center font-bold py-2'>Login Here</h1>
                    <input type="text" placeholder='Email' />
                    <input type="text" placeholder='Password' />
                    <div className='register'>
                        <p className=''>New to TopGear ? <Link onClick={() => setModal(false)} className='regis' to='/register'>Register</Link></p>
                    </div>
                    <button type='submit'>Login</button>
                </form>
             

            </div>

        </div>
    );
};

export default Modal;