import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import "./Dashboard.css";
import { FiLogOut } from "react-icons/fi";
import {
  MdOutlineNotificationsActive,
  MdOutlineKeyboardArrowDown,
  MdClose,
} from "react-icons/md";
import { BiHelpCircle, BiMessage } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineHome } from "react-icons/ai";
import { BiTask } from "react-icons/bi";
import { BsChatLeftDots } from "react-icons/bs";
import useUser from "../../../hooks/useUser";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import { toast } from "react-toastify";


const Dashboard = () => {

  const [showProfile, setShowProfile] = useState(false);

  const navigate = useNavigate();
  const [singleUser] = useUser();
  const handleLogout = () => {
    signOut(auth).then(() => {
      navigate("/");
      toast.success("Logout Succesful");
    });
  };
  return (
    <>
      <div className="dashboard-container ">
        <div className="dashboard-navbar">
          <div onClick={() => navigate("/")} >
            <div className="dash-logo flex">
              <img onClick={() => navigate('/')} src="https://i.ibb.co/sbWSq7g/bandwidth.png" alt="" />
              <p className='lg:text-xl font-bold text-sky-600 lg:ml-4 lg:mt-2 '>TopGear Perform</p>
            </div>
          </div>
          <div className="dashboard-links">

            <Link to="/dashboard/notification">
              <MdOutlineNotificationsActive className="dash-nav-icon" />
            </Link>
            <Link to="/helpCenter">
              <BiHelpCircle className="dash-nav-icon" />
            </Link>
            <Link to="/dashboard/chat">
              <BiMessage className="dash-nav-icon" />
            </Link>
            <div className="profie">
              <CgProfile
                onClick={() => setShowProfile(!showProfile)}
                className="dash-nav-icon"
              />
              <p
                onClick={() => setShowProfile(!showProfile)}
                className="inline text-sm"
              >
                {singleUser[0]?.fullName}{" "}
                <MdOutlineKeyboardArrowDown className="inline" />
              </p>
              {showProfile && (
                <div className="user-profile">
                  <MdClose
                    onClick={() => setShowProfile(!showProfile)}
                    className="profile-close-icon"
                  />
                  <button onClick={handleLogout}>
                    <FiLogOut className="inline lg:text-xl lg:mr-3" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>


        <div className="dashboard-body">
          <Outlet />
        </div>


        <div className="sidebar">
          <Link to="/dashboard/home">
            {" "}
            <AiOutlineHome className="sidebar-icon" />{" "}
          </Link>

          <Link to="/dashboard/task">
            {" "}
            <BiTask className="sidebar-icon" />{" "}
          </Link>
          <Link to="/dashboard/chat">
            {" "}
            <BsChatLeftDots className="sidebar-icon" />
          </Link>
        </div>

      </div>
    </>
  );
};

export default Dashboard;