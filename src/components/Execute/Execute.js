import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';
import './Execute.css'
const Execute = () => {
    return (
        <div className='execute bg-slate-900'>

            <div className='text-white text-center text-3xl font-bold '>
                <h2>Execute your strategy with the</h2>
                <h2>industry’s most preferred and</h2>
                <h2>intuitive software</h2>
            </div>
            <div className='mt-7 circle-text mx-auto text-center'>
                <p className='inline mr-8 pt-8 small-txt'>  <IoCheckmarkCircle className='success-circle' /> Free for one month</p>
                <p className='inline mr-8 pt-8 small-txt'>  <IoCheckmarkCircle className='success-circle ' /> No Credit Card needed</p>

            </div>
            <div className='mx-auto mt-10 text-center'>
                <button className='primary-btn free-btn h-btn'>GET STARTED FREE</button>
                <button className='outline-btn'>SCHEDULE DEMO</button>
            </div>
        </div>
    );
};

export default Execute;