import React from 'react';
import './Header.css'
import { IoCheckmarkCircle } from 'react-icons/io5';

const Header = () => {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header-content">
                        <h1 className='text-start'>We Believe In Transparency, We Build The Trust.</h1>
                        <p className='banner-desc'>Focus on Goals. Measure your Progress. Achieve Results</p>
                        <div>
                            <button className='primary-btn header-btn'>GET STARTED FREE</button>
                            <button className='outline-button'>SCHEDULE DEMO</button>
                        </div>
                        <div className='flex flex-row text-center mt-2 pl-8'>
                            <p className='mr-8 pt-3 small-txt'>  <IoCheckmarkCircle className='success-circle' /> Free for 5 Users</p>
                            <p className='mr-8 pt-3 small-txt'>  <IoCheckmarkCircle className='success-circle' /> No Credit Card Required</p>

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