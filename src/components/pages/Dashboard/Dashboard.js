import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom'
import './Dashboard.css'
import { VscFileSymlinkDirectory } from 'react-icons/vsc'
import { FiFlag, FiLogOut } from 'react-icons/fi'
import { MdOutlineNotificationsActive, MdOutlineKeyboardArrowDown, MdClose } from 'react-icons/md'
import { BiHelpCircle, BiMessage } from 'react-icons/bi'
import { CgProfile } from 'react-icons/cg'
import { AiOutlineHome } from 'react-icons/ai'
import { BiTargetLock, BiTask } from 'react-icons/bi'
import { BsChatLeftDots } from 'react-icons/bs'
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
const Dashboard = () => {
    const [showProfile, setShowProfile] = useState(false)
    const [singleUser, setUser] = useState([])
    const [user] = useAuthState(auth)
    const navigate = useNavigate()
    const userEmail = user?.email
    useEffect(() => {

        fetch(`https://dry-ravine-83506.herokuapp.com/user/torik@gmail.com`)
            .then(res => res.json())
            .then(data => console.log(data))
    },[])
    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                navigate('/')
                toast.success('Logout Succesful', { toastId: 'logout' })
            })
    }


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
                            <CgProfile onClick={() => setShowProfile(!showProfile)} className='dash-nav-icon' />
                            <p onClick={() => setShowProfile(!showProfile)} className='inline text-sm'>{singleUser[0]?.fullName} <MdOutlineKeyboardArrowDown className='inline' /></p>
                            {showProfile && <div className="user-profile">
                                <MdClose onClick={() => setShowProfile(!showProfile)} className='profile-close-icon' />
                                <button onClick={handleLogout}><FiLogOut className='inline text-xl mr-3' />Logout</button>

                            </div>}
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