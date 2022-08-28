import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GrClose } from 'react-icons/gr';
import { RiArrowDownSLine, RiGlobalLine } from 'react-icons/ri';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './Header.css';
import { signOut } from 'firebase/auth';

const Navbar = () => {
    const [user] = useAuthState(auth)

    const [toggle, setToggle] = useState(false)
    const [showProfile, setShowProfile] = useState(false)
    const navigate = useNavigate()
    const handleSignout = () => {


        signOut(auth)
            .then(() => {
                setShowProfile(false)
            })
            .catch((err) => console.log(err))
        navigate('/login')


    }
    return (
        <>
            <nav>
                <div className="top-nav-bar">
                    <Link to="/aboutUs">About us</Link>
                    <Link to="/blogs">Blog</Link>
                    <Link to="/contact">Contact us</Link>
                    {user && <Link onClick={handleSignout} to="/dashboard/home">Dashbroad </Link> }
                    {user ? <Link onClick={handleSignout} to="/login">Logout </Link> : <Link to="/login">Sign in </Link>}
                    <RiGlobalLine className='global-icon' />
                </div>
                <div className="main-nav-bar">
                    <div className="logo">
                        <img onClick={() => navigate('/')} width='300px' src="https://i.ibb.co/f9ZDrz1/logo.png" alt="" />
                    </div>
                    <GiHamburgerMenu onClick={() => setToggle(!toggle)} className='burger-icon' />
                    <div className="main-nav-links">
                        <div className="dropdown  dropdown-hover cursor-pointer dropdown-container">
                            
                            <label tabIndex="0">PRODUCTS<RiArrowDownSLine className='arrow-icon' /> </label>
                            <ul tabIndex="0" className="dropdown-content menu shadow bg-slate-50 w-72">

                                <li className='hover:none '> <Link className='dash-link' to='/login'><img src="https://i.ibb.co/rMtSDJZ/product-overview.png" alt="" />Product Overview</Link></li>

                                <li ><Link className='dash-link' to='/dashboard/add-goal'><img src="https://i.ibb.co/cXYpzBx/performance.png" alt="" />  Performance Management</Link></li>

                                <li ><Link className='dash-link' to='/dashboard/task'><img src="https://i.ibb.co/L51BwxN/task-Management.png" alt="" /> Task Management</Link></li>

                                <li ><Link className='dash-link' to='/dashboard/employee'><img src="https://i.ibb.co/TMJZqKB/employee-engagemnet.png" alt="" /> Employee Management</Link></li>

                            </ul>
                        </div>
                        <div className="dropdown dropdown-hover cursor-pointer dropdown-container">
                            <label tabIndex="0">CUSTOMERS<RiArrowDownSLine className='arrow-icon' /> </label>
                            <ul tabIndex="0" className="dropdown-content menu  shadow bg-slate-50 w-72">
                                <li><Link className='dash-link' to='/dashboard/reviews'><img src="https://i.ibb.co/TMJZqKB/employee-engagemnet.png" alt="" /> Case Study</Link></li>
                                <li><Link className='dash-link' to='/praise'><img src="https://i.ibb.co/thRDcVS/integrations.png" alt="" /> Why TopGear Perform</Link></li>
                            </ul>
                        </div>

                        <Link to='/pricing'>PRICING</Link>

                        <div className="dropdown dropdown-hover cursor-pointer dropdown-container">
                            <label tabIndex="0">RESOURCES<RiArrowDownSLine className='arrow-icon' /> </label>
                            <ul tabIndex="0" className="dropdown-content menu shadow bg-slate-50 w-72">
                                <li><Link className='dash-link' to='/ebook'><img src="https://i.ibb.co/7C61C9N/books.png" alt="" /> eBooks</Link></li>

                                <li><Link className='dash-link' to='/blogs'><img src="https://i.ibb.co/mbkby2D/library.png" alt="" />Blogs</Link></li>

                                <li><Link className='dash-link' to='/dashboard/course'><img src="https://i.ibb.co/xqvZ74w/example-Copy.png" alt="" />Our Examples</Link></li>

                            </ul>
                        </div>

                        <div className="dropdown dropdown-hover cursor-pointer dropdown-container">
                            <label tabIndex="0">SUPPORT<RiArrowDownSLine className='arrow-icon' /> </label>
                            <ul tabIndex="0" className="dropdown-content menu p-2 shadow bg-slate-50 w-72">
                                <li> <Link className='dash-link' to='/faq'><img src="https://i.ibb.co/kHtgtPX/faq.png" alt="" />Answers FAQ</Link></li>

                                <li><Link className='dash-link' to='/helpCenter'><img src="https://i.ibb.co/GsNLVfK/help.png" alt="" /> Help Center</Link></li>

                                <li><Link className='dash-link' to='/dashboard/chat'><img src="https://i.ibb.co/BPqdR82/update.png" alt="" />Chat</Link></li>
                            </ul>
                        </div>
                        <button className='primary-btn'><Link to='/login'>TRY IT FREE</Link></button>
                        <button className='secondary-btn'> <Link id='demo-text' to="/schedule">SCHEDULE DEMO</Link> </button>
                    </div>
                </div>
            </nav>
            {
                toggle &&

                <div className="toggle-menu">

                    <GrClose className='close-icon' onClick={() => setToggle(!toggle)} />

                    <div className="dropdown dropdown-hover cursor-pointer dropdown-container block mt-4 mb-4">
                        <label tabIndex="0">PRODUCTS<RiArrowDownSLine className='arrow-icon' /> </label>
                        <ul tabIndex="0" className="dropdown-content menu  shadow-xl bg-slate-50 ml-20 w-72">
                            <li className='hover:none'> <Link to='/login'><img src="https://i.ibb.co/rMtSDJZ/product-overview.png" alt="" />Product Overview</Link></li>

                            <li><Link to='/dashboard/add-goal'><img src="https://i.ibb.co/cXYpzBx/performance.png" alt="" />  Performance Management</Link></li>

                            <li><Link to='/dashboard/task'><img src="https://i.ibb.co/L51BwxN/task-Management.png" alt="" /> Task Management</Link></li>

                            <li><Link to='/dashboard/employee'><img src="https://i.ibb.co/TMJZqKB/employee-engagemnet.png" alt="" /> Employee Management</Link></li>

                        </ul>
                    </div>
                    <hr />
                    <div className="dropdown dropdown-hover cursor-pointer dropdown-container block mt-4 mb-4">
                        <label tabIndex="0">CUSTOMERS<RiArrowDownSLine className='arrow-icon' /> </label>
                        <ul tabIndex="0" className="dropdown-content menu shadow-xl ml-20 bg-slate-50 w-72">
                            <li><Link to='/dashboard/reviews'><img src="https://i.ibb.co/TMJZqKB/employee-engagemnet.png" alt="" /> Case Study</Link></li>
                            <li><Link to='/praise'><img src="https://i.ibb.co/thRDcVS/integrations.png" alt="" /> Why TopGear Perform</Link></li>
                        </ul>
                    </div>
                    <hr />
                    <Link className='price-link mt-4 mb-4' to='/'>PRICING</Link>
                    <hr />
                    <div className="dropdown dropdown-hover cursor-pointer dropdown-container block mt-4 mb-4">
                        <label tabIndex="0">RESOURCES<RiArrowDownSLine className='arrow-icon' /> </label>
                        <ul tabIndex="0" className="dropdown-content menu  shadow-xl ml-20 bg-slate-50 w-72">
                            <li><Link to='/ebook'><img src="https://i.ibb.co/7C61C9N/books.png" alt="" /> eBooks</Link></li>

                            <li><Link to='/blogs'><img src="https://i.ibb.co/mbkby2D/library.png" alt="" />Blogs</Link></li>

                            <li><Link to='/dashboard/course'><img src="https://i.ibb.co/xqvZ74w/example-Copy.png" alt="" />Our Examples</Link></li>

                        </ul>
                    </div>
                    <hr />
                    <div className="dropdown dropdown-hover cursor-pointer dropdown-containermt-4 mt-4 mb-4">
                        <label tabIndex="0">SUPPORT<RiArrowDownSLine className='arrow-icon' /> </label>
                        <ul tabIndex="0" className="dropdown-content menu p-2 shadow-xl ml-20 bg-slate-50 w-72">
                            <li> <Link to='/faq'><img src="https://i.ibb.co/kHtgtPX/faq.png" alt="" />Answers FAQ</Link></li>

                            <li><Link to='/helpCenter'><img src="https://i.ibb.co/GsNLVfK/help.png" alt="" /> Help Center</Link></li>

                            <li><Link to='/dashboard/chat'><img src="https://i.ibb.co/BPqdR82/update.png" alt="" />Chat</Link></li>
                        </ul>
                    </div>
                    <hr />

                    <Link className='price-link mt-4 mb-4' to='/team'>ABOUT US</Link>
                    <hr />
                    <Link className='price-link mt-4 mb-4' to='/blogs'>BLOG</Link>
                    <hr />
                    <Link className='price-link mt-4 mb-4' to='/contact'>CONTACT US</Link>
                    <hr />
                    <Link className='price-link mt-4 mb-4' to='/login'>SIGN IN</Link>
                    <hr />
                    <div className='mt-8'>
                        <button className='primary-btn'>TRY IT FREE</button>
                        <button className='secondary-btn'> <Link to="/schedule">SCHEDULE DEMO</Link> </button>
                    </div>
                </div>

            }
        </>
    );
};

export default Navbar;