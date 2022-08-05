import React, { useState } from 'react';
import './Header.css'
import { RiArrowDownSLine } from 'react-icons/ri';
import { IoCheckmarkCircle } from 'react-icons/io5';

import { GrClose } from 'react-icons/gr'
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import BusinessPlatform from '../BusinessPlatform.js/BusinessPlatform';
import HelpCenter from '../../HelpCenter/HelpCenter';

const Header = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <>
            <header>


                <div className="header-container">
                    <div className="header-content">
                        <h1>OKR Software that helps you execute your strategy</h1>
                        <p className='banner-desc'>Focus on Goals. Measure your Progress. Achieve Results</p>
                        <div>
                            <button className='primary-btn h-btn'>GET STARTED FREE</button>
                            <button className='outline-btn'>SCHEDULE DEMO</button>
                        </div>
                        <div className='mt-4'>
                            <p className='inline mr-8 pt-8 small-txt'>  <IoCheckmarkCircle className='success-circle' /> Free for 5 Users</p>
                            <p className='inline mr-8 pt-8 small-txt'>  <IoCheckmarkCircle className='success-circle' /> No Credit Card Required</p>

                        </div>
                        <div className="awards-container mt-10">
                            <p className='award-title'>Awards & Recognitions</p>
                        </div>
                        <img src="https://i.ibb.co/bPt7jgz/awards.png" alt="" />

                    </div>
                    <div className="header-image">
                        <img src="https://cdns.profit.co/site/v1.2.21/images/banner-progress-img.png" alt="" />
                    </div>
                </div>


            </header>
        </>
    );
};

export default Header;