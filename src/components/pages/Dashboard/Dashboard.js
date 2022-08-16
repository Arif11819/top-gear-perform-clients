import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Dashboard.css'
import { VscFileSymlinkDirectory } from 'react-icons/vsc'
import { FiFlag } from 'react-icons/fi'
import { MdOutlineNotificationsActive, MdOutlineKeyboardArrowDown } from 'react-icons/md'
import { BiHelpCircle, BiMessage } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineHome } from 'react-icons/ai'
import { BiTargetLock, BiTask } from 'react-icons/bi'
import { BsChatLeftDots } from 'react-icons/bs'
import useUser from '../../../hooks/useUser';
const Dashboard = () => {
    const navigate = useNavigate()

    const [singleUser] = useUser()
    return (
        <>
            <div className='dashboard-container'>
                <div className="dashboard-navbar">
                    <div onClick={() => navigate('/')} className="dashboard-logo">
                        <img src="https://i.ibb.co/f9ZDrz1/logo.png" width='200px' alt="" />
                    </div>
                    <div className="dashboard-links">
                        <Link to="">< VscFileSymlinkDirectory className='dash-nav-icon' /></Link>
                        <Link to="">< FiFlag className='dash-nav-icon' /></Link>
                        <Link to="">< MdOutlineNotificationsActive className='dash-nav-icon' /></Link>
                        <Link to="">< BiHelpCircle className='dash-nav-icon' /></Link>
                        <Link to="">< BiMessage className='dash-nav-icon' /></Link>
                        <div className="profie">
                            <CgProfile className='dash-nav-icon' />
                            <p className='inline text-sm'>{singleUser[0]?.fullName} <MdOutlineKeyboardArrowDown className='inline' /></p>
                        </div>

                    </div>
                </div>
                <div className="dashboard-body">
                    <Outlet />
                </div>

                <div className="sidebar">
                    <Link to="/dashboard/home"> <AiOutlineHome className='sidebar-icon' />  </Link>
                    <Link to="/dashboard/focus">   <BiTargetLock className='sidebar-icon' />  </Link>
                    <Link to="/dashboard/task">      <BiTask className='sidebar-icon' />  </Link>
                    <Link to="/dashboard/chat">   <BsChatLeftDots className='sidebar-icon' /></Link>
                </div>
            </div>

        </>
    );
};

export default Dashboard;