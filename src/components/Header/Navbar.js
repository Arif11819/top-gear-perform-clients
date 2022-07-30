

import React, { useState } from 'react';
import './Navbar.css'
import { MdLogin } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdClose } from 'react-icons/md';
import { NavLink, useNavigate } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [toggle, setToggle] = useState(true)
    const [modal, setModal] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const navigate = useNavigate()
    const [user, loading, error] = useAuthState(auth)


    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                setShowProfile(false)
            })
            .catch((err) => console.log(err))
    }

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
                    <NavLink to="/contactUs" className={({ isActive }) =>
                        isActive ? "active-link" : "navbar-links"
                    }>Contact Us</NavLink>
                    <NavLink to="/dashboardRoute" className={({ isActive }) =>
                        isActive ? "active-link" : "navbar-links"
                    }>Dashboard</NavLink>
                </div>
                {user ? <div className='flex items-center'>
                    <div className="avatar placeholder">
                        <div onClick={() => setShowProfile(!showProfile)} className="profile-pic bg-neutral-focus text-neutral-content rounded-full w-12">
                            <img src="https://placeimg.com/192/192/people" alt='profile' />
                        </div>
                    </div>
                    <h1 className='text-white mx-2'>name</h1>

                </div> :


                    <div className="login-button">
                        <button onClick={() => setModal(true)}>Login <MdLogin className='inline' /></button>
                    </div>}
            </nav>


            {/* mobile menu */}

            {toggle ? null : <div className='toggle-menu' data-aos="fade-left" data-aos-duration="600">
                <MdClose onClick={() => setToggle(!toggle)} className='close-icon' />


                <div className={toggle ? " close-menu" : 'toggle-menu-links'}>
                    <NavLink onClick={() => setToggle(!toggle)} to="/" className={({ isActive }) =>
                        isActive ? "active-link" : "navbar-links"
                    }>Home</NavLink>



                    <NavLink onClick={() => setToggle(!toggle)} to="/aboutUs" className={({ isActive }) =>
                        isActive ? "active-link" : "navbar-links"
                    }>About Us</NavLink>
                    <NavLink to="/contactUs" className={({ isActive }) =>
                        isActive ? "active-link" : "navbar-links"
                    }>Contact Us</NavLink>
                    <NavLink to="/dashboardRoute" className={({ isActive }) =>
                        isActive ? "active-link" : "navbar-links"
                    }>Dashboard</NavLink>

                    <button onClick={() => setModal(true)} className='toggle-menu-button'>Login <MdLogin className='inline' /></button>
                </div>

            </div>}

            {
                modal && <LoginModal setModal={setModal} />
            }
            {

                showProfile && <div data-aos="fade-left" data-aos-duration="1000" className="profile-modal">

                    <button o className='logout-button' onClick={handleSignout}>Logout</button>
                </div>

            }
        </>
    );
};

export default Navbar;