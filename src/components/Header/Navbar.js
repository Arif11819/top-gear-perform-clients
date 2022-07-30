

import React, { useEffect, useState } from 'react';
import './Navbar.css'
import { MdLogin } from 'react-icons/md';
import { GiHamburgerMenu } from 'react-icons/gi';
import {CgProfile,CgLogOut} from 'react-icons/cg'
import {RiDashboardLine} from 'react-icons/ri'
import { MdClose } from 'react-icons/md';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import LoginModal from '../LoginModal/LoginModal'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { signOut } from 'firebase/auth';
const Navbar = () => {
    const [toggle, setToggle] = useState(true)
    const [modal, setModal] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const navigate = useNavigate()
    const [userData, setUserData] = useState({})
    const [user] = useAuthState(auth)

    const userEmail = user?.email


    useEffect(() => {
        fetch(`http://localhost:5000/user/${userEmail}`)
            .then((res) => res.json())
            .then(data => setUserData(data))
    }, [userEmail])

    const handleSignout = () => {
        signOut(auth)
            .then(() => {
                setShowProfile(false)
            })
            
    }

console.log(userData[0]?.fullName)

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
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiItcLdyEroY3V8TFUW3tNjVCX5aNXBwKgAA&usqp=CAU" alt='profile' />
                        </div>
                    </div>
                    <h1 className='text-white mx-2'>{userData[0]?.fullName}</h1>

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

                showProfile && <div data-aos="zoom-in" data-aos-duration="300" className="profile-modal">
                    <Link onClick={()=>(setShowProfile(false))} to ='/myProfile' > <CgProfile className='profile-icons'/>My Profile</Link>
                    <Link onClick={()=>(setShowProfile(false))} to ='/dashboardRoute' > <RiDashboardLine className='profile-icons' />Dashboard</Link>
                    <Link to='/' onClick={handleSignout}> <CgLogOut className='profile-icons' />Logout</Link>
                </div>

            }
        </>
    );
};

export default Navbar;