import React from "react";
import { Link } from "react-router-dom";
import "./DashHome.css";

const DashHome = () => {
  return (
    <div className="flex bg-base-100">
      <div>
        <ul className="menu w-56 p-2 rounded-box">
          {/* num-01 */}

          <li className="notification-text" tabindex="0">
          <Link to="/dashboard/">All Employee</Link>
          </li>

          {/* num-02 */}

          <li className="notification-text" tabindex="1">
            <Link to="/dashboard/action">Action Center</Link>
          </li>

          {/* num-03 */}

          <li className="notification-text" tabindex="2">
          <Link to="/dashboard/">Person</Link>
          </li>

          {/* num-04 */}

          <li className="notification-text" tabindex="3">
            <Link to='/dashboard/notes'>Notes</Link>
          </li>

          {/* num-05 */}

          <li className="notification-text" tabindex="4">
            <Link to="/dashboard/">Company Dashboard</Link>
          </li>

          {/* num-06 */}

          <li className="notification-text" tabindex="5">
          <Link to="/dashboard/emergency">Emergency Contact</Link>
          </li>

          {/* num-07 */}

          <li className="notification-text" tabindex="6">
          <Link to="/dashboard/">HR Management</Link>
          </li>

          {/* num-09 */}

          <li className="notification-text" tabindex="8">
            <Link to="/dashboard/newsfeed" >News Feed</Link>
          </li>

          {/* num-10 */}

          <li className="notification-text" tabindex="9">
            <Link to="/dashboard/">Organizatin Hierarchy</Link>
          </li>
        </ul>
      </div>
      {/* <div>
        <img src="https://i.ibb.co/C2s1jkX/Screenshot-2022-08-12-111904.png" alt="" className="w-3/2 " />
      </div> */}
    </div>
  );
};

export default DashHome;