import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import { Link } from 'react-router-dom';

import './Execute.css'
const Execute = () => {
    return (
        <div className='execute bg-slate-900'>

            <div className='text-white text-center text-1xl lg:text-3xl font-bold '>
                <h2>Execute your strategy with the</h2>
                <h2>industry’s most preferred and</h2>
                <h2>intuitive software</h2>
            </div>
            <div className='mt-7 text-white flex justify-center items-center text-center lg:mx-auto mt-4'>
                <p className='inline mr-8 pt-8'><IoCheckmarkCircle className='success-circle' /> Free for one month</p>
                <p className='inline mr-8 pt-8'><IoCheckmarkCircle className='success-circle ' /> No Credit Card needed</p>

            </div>
            <div className='lg:mx-auto px-10 pr-16 mt-10 text-center'>
                <Link to='/login' className='primary-btn free-btn h-btn'>GET STARTED FREE</Link>
                <Link to='/schedule' className='outline-btn'>SCHEDULE DEMO</Link>
            </div>

        </div>
    );
};

export default Execute;