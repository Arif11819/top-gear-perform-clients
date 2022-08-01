import React from 'react';
import './Header.css'
import { RiArrowDownSLine, RiGlobalLine } from 'react-icons/ri';
import { IoCheckmarkCircle } from 'react-icons/io5';

import { Link, useNavigate } from 'react-router-dom';

const Header = () => {

    const navigate = useNavigate()
    return (
        <header>

            <nav>
                <div className="top-nav-bar">
                    <Link to="/">About us</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Contact us</Link>
                    <Link to="/">Sign in </Link>
                    <RiGlobalLine className='global-icon' />
                </div>
                <div className="main-nav-bar">
                    <div className="logo">
                        <img onClick={() => navigate('/')} width='300px' src="https://i.ibb.co/f9ZDrz1/logo.png" alt="" />
                    </div>
                    <ul className="main-nav-links">
                        <li href="/">PRODUCTS <RiArrowDownSLine className='arrow-icon' /></li>
                        <li href="/">CUSTOMERS  <RiArrowDownSLine className='arrow-icon' /></li>
                        <li href="/">PRICING</li>
                        <li href="/">RESOURCES  <RiArrowDownSLine className='arrow-icon' /></li>
                        <li href="/">SUPPORT  <RiArrowDownSLine className='arrow-icon' /></li>
                        <button className='primary-btn'>TRY IT FREE</button>
                        <button className='secondary-btn'>SCHEDULE DEMO</button>
                    </ul>
                </div>
            </nav>

            <div className="header-container">
                <div className="header-content">
                    <h1>OKR Software that helps you execute your strategy</h1>
                    <p className='banner-desc'>Focus on Goals. Measure your Progress. Achieve Results</p>
                    <div>
                        <button className='primary-btn h-btn'>GET STARTED FREE</button>
                        <button className='outline-btn'>SCHEDULE DEMO</button>
                    </div>
                    <div className='mt-10'>
                        <p className='inline mr-8 pt-8 small-txt'>  <IoCheckmarkCircle className='success-circle' /> Free for 5 Users</p>
                        <p className='inline mr-8 pt-8 small-txt'>  <IoCheckmarkCircle className='success-circle' /> No Credit Card Required</p>

                    </div>
                    <div className="awards-container mt-10">
                        <p className='award-title'>Awards & Recognitions</p>
                    </div>

                </div>
                <div className="header-image">
                    <img src="https://cdns.profit.co/site/v1.2.21/images/banner-progress-img.png" alt="" />
                </div>
            </div>


        </header>
    );
};

export default Header;