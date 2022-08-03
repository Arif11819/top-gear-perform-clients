import { signOut } from 'firebase/auth';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { RiArrowDownSLine, RiGlobalLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import './Header.css'

const Navbar = () => {
    const [user] = useAuthState(auth)

    const [toggle, setToggle] = useState(false)
    const navigate = useNavigate()
    const handleSignout = () => {
        signOut(auth)
            .then(() => {
               toast.success('Logout Succesful')
            })
            
    }
    return (
        <>
        <nav>
        <div className="top-nav-bar">
            <Link to="/">About us</Link>
            <Link to="/">Blog</Link>
            <Link to="/">Contact us</Link>
           {user ?<Link onClick={handleSignout} to="/">Logout </Link>: <Link to="/login">Sign in </Link>}
            <RiGlobalLine className='global-icon' />
        </div>
        <div className="main-nav-bar">
            <div className="logo">
                <img onClick={() => navigate('/')} width='300px' src="https://i.ibb.co/f9ZDrz1/logo.png" alt="" />
            </div>
            <GiHamburgerMenu onClick={() => setToggle(!toggle)} className='burger-icon' />
            <div className="main-nav-links">
                <div className="dropdown dropdown-hover cursor-pointer dropdown-container">
                    <label tabIndex="0">PRODUCTS<RiArrowDownSLine className='arrow-icon' /> </label>
                    <ul tabIndex="0" className="dropdown-content menu shadow bg-base-100 w-72">

                        <li> <a href='/'><img src="https://i.ibb.co/rMtSDJZ/product-overview.png" alt="" />Product Overview</a></li>

                        <li><a href='/'><img src="https://i.ibb.co/yNLbTG8/management.png" alt="" /> OKR Management</a></li>

                        <li><a href='/'><img src="https://i.ibb.co/cXYpzBx/performance.png" alt="" />  Performance Management</a></li>

                        <li><a href='/'><img src="https://i.ibb.co/L51BwxN/task-Management.png" alt="" /> Task Management</a></li>

                        <li><a href='/'><img src="https://i.ibb.co/TMJZqKB/employee-engagemnet.png" alt="" /> Employee Management</a></li>
                        <li><a href='/'><img src="https://i.ibb.co/thRDcVS/integrations.png" alt="" /> Intregrations</a></li>

                    </ul>
                </div>
                <div className="dropdown dropdown-hover cursor-pointer dropdown-container">
                    <label tabIndex="0">CUSTOMERS<RiArrowDownSLine className='arrow-icon' /> </label>
                    <ul tabIndex="0" className="dropdown-content menu  shadow bg-base-100 w-72">
                        <li><a href='/'><img src="https://i.ibb.co/TMJZqKB/employee-engagemnet.png" alt="" /> Case Study</a></li>
                        <li><a href='/'><img src="https://i.ibb.co/thRDcVS/integrations.png" alt="" /> Why TopGear Perform</a></li>
                    </ul>
                </div>

                <Link to='/'>PRICING</Link>

                <div className="dropdown dropdown-hover cursor-pointer dropdown-container">
                    <label tabIndex="0">RESOURCES<RiArrowDownSLine className='arrow-icon' /> </label>
                    <ul tabIndex="0" className="dropdown-content menu shadow bg-base-100 w-72">
                        <li> <a href='/'><img src="https://i.ibb.co/19V7SY7/universtiy.png" alt="" />OKR University</a></li>


                        <li><a href='/'><img src="https://i.ibb.co/7C61C9N/books.png" alt="" /> eBooks</a></li>

                        <li><a href='/'><img src="https://i.ibb.co/mbkby2D/library.png" alt="" />  KPI Library</a></li>

                        <li><a href='/'><img src="https://i.ibb.co/xqvZ74w/example-Copy.png" alt="" /> Our Examples</a></li>

                        <li><a href='/'><img src="https://i.ibb.co/6H0ZFf8/watch.png" alt="" />Watch Latest webinars</a></li>

                    </ul>
                </div>

                <div className="dropdown dropdown-hover cursor-pointer dropdown-container">
                    <label tabIndex="0">SUPPORT<RiArrowDownSLine className='arrow-icon' /> </label>
                    <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-base-100 w-72">
                        <li> <a href='/'><img src="https://i.ibb.co/kHtgtPX/faq.png" alt="" />Answers FAQ</a></li>

                        <li><a href='/'><img src="https://i.ibb.co/gPD8XsB/canvas.png" alt="" /> OKI Canvas</a></li>

                        <li><a href='/'><img src="https://i.ibb.co/GsNLVfK/help.png" alt="" /> Help Center</a></li>

                        <li><a href='/'><img src="https://i.ibb.co/BPqdR82/update.png" alt="" />Release and Updates</a></li>
                    </ul>
                </div>

                <button className='primary-btn'>TRY IT FREE</button>
                <button className='secondary-btn'>SCHEDULE DEMO</button>
            </div>
        </div>
    </nav>
    {
                toggle &&

                <div className="toggle-menu">

                    <GrClose className='close-icon' onClick={() => setToggle(!toggle)} />

                    <div className="dropdown dropdown-hover cursor-pointer dropdown-container block mt-4 mb-4">
                        <label tabIndex="0">PRODUCTS<RiArrowDownSLine className='arrow-icon' /> </label>
                        <ul tabIndex="0" className="dropdown-content menu  shadow-xl bg-base-100 ml-20 w-72">

                            <li> <a href='/'>Product Overview</a></li>

                            <li><a href='/'> OKR Management</a></li>

                            <li><a href='/'>  Performance Management</a></li>

                            <li><a href='/'> Task Management</a></li>

                            <li><a href='/'> Employee Management</a></li>
                            <li><a href='/'> Intregrations</a></li>

                        </ul>
                    </div>
                    <hr />
                    <div className="dropdown dropdown-hover cursor-pointer dropdown-container block mt-4 mb-4">
                        <label tabIndex="0">CUSTOMERS<RiArrowDownSLine className='arrow-icon' /> </label>
                        <ul tabIndex="0" className="dropdown-content menu shadow-xl ml-20 bg-base-100 w-72">
                            <li><a href='/'> Case Study</a></li>
                            <li><a href='/'> Why TopGear Perform</a></li>
                        </ul>
                    </div>
                    <hr />
                    <Link className='price-link mt-4 mb-4' to='/'>PRICING</Link>
                    <hr />
                    <div className="dropdown dropdown-hover cursor-pointer dropdown-container block mt-4 mb-4">
                        <label tabIndex="0">RESOURCES<RiArrowDownSLine className='arrow-icon' /> </label>
                        <ul tabIndex="0" className="dropdown-content menu  shadow-xl ml-20 bg-base-100 w-72">
                            <li> <a href='/'>OKR University</a></li>


                            <li><a href='/'>eBooks</a></li>

                            <li><a href='/'>  KPI Library</a></li>

                            <li><a href='/'> Our Examples</a></li>

                            <li><a href='/'>Watch Latest webinars</a></li>

                        </ul>
                    </div>
                    <hr />
                    <div className="dropdown dropdown-hover cursor-pointer dropdown-containermt-4 mt-4 mb-4">
                        <label tabIndex="0">SUPPORT<RiArrowDownSLine className='arrow-icon' /> </label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow-xl ml-20 bg-base-100 w-72">
                            <li> <a href='/'>Answers FAQ</a></li>

                            <li><a href='/'> OKI Canvas</a></li>

                            <li><a href='/'> Help Center</a></li>

                            <li><a href='/'>Release and Updates</a></li>
                        </ul>
                    </div>
                    <hr />

                    <Link className='price-link mt-4 mb-4' to='/'>ABOUT US</Link>
                    <hr />
                    <Link className='price-link mt-4 mb-4' to='/'>BLOG</Link>
                    <hr />
                    <Link className='price-link mt-4 mb-4' to='/'>CONTACT US</Link>
                    <hr />
                    <Link className='price-link mt-4 mb-4' to='/login'>SIGN IN</Link>
                    <hr />
                    <div className='mt-8'>
                        <button className='primary-btn'>TRY IT FREE</button>
                        <button className='secondary-btn'>SCHEDULE DEMO</button>
                    </div>
                </div>

            }
    </>
    );
};

export default Navbar;