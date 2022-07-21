

import React, { useState } from 'react';
import './Navbar.css'
import { MdLogin } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
const Navbar = () => {
    const [toggle, setToggle] = useState(true)
    return (
        <>
            <nav>
                <div className="logo">
                    <img width='300px' src="https://i.ibb.co/f9ZDrz1/logo.png" alt="" />
                </div>
                {toggle
                    ?
                    <GiHamburgerMenu onClick={() => setToggle(!toggle)} className='hamburger-icon' />
                    :
                    null
                }

                <div className="navbar-links">
                    <a href="/">Home</a>
                    <a href="/">Documentation</a>
                    <a href="/">About Us</a>
                </div>
                <div className="button">
                    <button>Login <MdLogin className='inline' /></button>
                </div>

            </nav>

            {toggle ? null : <div className='toggle-menu' data-aos="fade-left" data-aos-duration="600">
                <MdClose onClick={() => setToggle(!toggle)} className='close-icon' />


                <div className={toggle ? " close-menu" : 'toggle-menu-links'}>
                    <a href="/">Home</a>
                    <a href="/">Documentation</a>
                    <a href="/">About Us</a>
                    <button className='toggle-menu-button'>Login <MdLogin className='inline' /></button>
                </div>

            </div>}

        </>
    );
};

export default Navbar;