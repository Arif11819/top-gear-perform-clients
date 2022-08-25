import React from "react";
import { Link } from "react-router-dom";
import "./DashHome.css";

const DashHome = () => {
  return (
    <div className="flex">
      <div>
        <ul class="menu bg-base-100 w-56 p-2 rounded-box">
          {/* num-01 */}

          <li className="notification-text" tabindex="0">
            <button>Alignments</button>
          </li>

          {/* num-02 */}

          <li className="notification-text" tabindex="1">
            <Link to="/dashboard/action">Action Center</Link>
          </li>

          {/* num-03 */}

          <li className="notification-text" tabindex="2">
            <span>Alignments and Dependencies</span>
          </li>

          {/* num-04 */}

          <li className="notification-text" tabindex="3">
            <Link to='/dashboard/notes'>Notes</Link>
          </li>

          {/* num-05 */}

          <li className="notification-text" tabindex="4">
            <span>Company Dashboard</span>
          </li>

          {/* num-06 */}

          <li className="notification-text" tabindex="5">
            <span>Department Hierarchy</span>
          </li>

          {/* num-07 */}

          <li className="notification-text" tabindex="6">
            <span>KPI Boards</span>
            <ul class="bg-base-100">
              <li>
                <a href="/">KPI Boards Founds</a>
              </li>
            </ul>
          </li>

          {/* num-09 */}

          <li className="notification-text" tabindex="8">
            <Link to="/dashboard/newsfeed" >News Feed</Link>
          </li>

          {/* num-10 */}

          <li className="notification-text" tabindex="9">
            <span>Organizatin Hierarchy</span>
          </li>
          {/* num-11 */}
          <li className="notification-text" tabindex="8">
            <Link to="/dashboard/course" >Course</Link>
          </li>
          {/* num12 */}
          <li className="notification-text" tabindex="8">
            <Link to="/dashboard/add-course" >Add-Course</Link>
          </li>
        </ul>
      </div>
      <div>
        <img src="https://i.ibb.co/C2s1jkX/Screenshot-2022-08-12-111904.png" alt="" className="w-3/2 " />
      </div>
    </div>
  );
};

export default DashHome;