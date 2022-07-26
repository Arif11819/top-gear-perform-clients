

import React, { useState } from 'react';
import './Navbar.css'
import { MdLogin } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [toggle, setToggle] = useState(true)

    const navigate = useNavigate()
    return (
        <>
            <nav>
                <div className="logo">
                    <img onClick={() => navigate('/')} width='300px' src="https://i.ibb.co/f9ZDrz1/logo.png" alt="" />
                </div>
                {toggle
                    ?
                    <GiHamburgerMenu onClick={() => setToggle(!toggle)} className='hamburger-icon' />
                    :
                    null
                }

                <div>
                    <NavLink to="/" className={({ isActive }) =>
                        isActive ? "active-link" : "navbar-links"
                    }>Home</NavLink>



                    <NavLink to="/aboutUs" className={({ isActive }) =>
                        isActive ? "active-link" : "navbar-links"
                    }>About Us</NavLink>
                </div>
                <div className="login-button">
                    <button>Login <MdLogin className='inline' /></button>
                </div>

            </nav>

            {toggle ? null : <div className='toggle-menu' data-aos="fade-left" data-aos-duration="600">
                <MdClose onClick={() => setToggle(!toggle)} className='close-icon' />


                <div className={toggle ? " close-menu" : 'toggle-menu-links'}>
                    <NavLink onClick={() => setToggle(!toggle)} to="/" className={({ isActive }) =>
                        isActive ? "active-link" : "navbar-links"
                    }>Home</NavLink>



                    <NavLink onClick={() => setToggle(!toggle)} to="/aboutUs" className={({ isActive }) =>
                        isActive ? "active-link" : "navbar-links"
                    }>About Us</NavLink>
                    <button className='toggle-menu-button'>Login <MdLogin className='inline' /></button>
                </div>

            </div>}

        </>
    );
};

export default Navbar;