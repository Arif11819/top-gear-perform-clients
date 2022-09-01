import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import useAdmin from "../../../../hooks/useAdmin";
import "./DashHome.css";

const DashHome = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className="flex ">
      <div>
        <ul className="menu w-56 p-2 rounded-box">

          {/* num-01 */}
          {
            admin && <li className="notification-text" tabIndex="0">

              <Link className="dash-link" to="/dashboard/employee">All Employee</Link>


            </li>
          }


          {
            admin && <li className="notification-text" tabIndex="1">
              <Link className="dash-link" to="/dashboard/action">Admin Activity</Link>
            </li>
          }
          {
            admin && <li className="notification-text" tabIndex="1">
              <Link className="dash-link" to="/dashboard/chatrequest">Chat Request</Link>
            </li>
          }


          {/* num-03

          <li className="notification-text" tabIndex="2">

            <Link className="dash-link" to="/dashboard/person">Person</Link>


          </li> */}

          {/* num-04 */}

          <li className="notification-text" tabIndex="3">
            <Link className="dash-link" to='/dashboard/notes'>Notes</Link>
          </li>

          {/* num-05 */}

          {/* <li className="notification-text" tabIndex="4">
            <Link className="dash-link" to="/dashboard/company">Company Dashboard</Link>
          </li> */}

          {/* num-06 */}

          <li className="notification-text" tabIndex="5">

            <Link className="dash-link" to="/dashboard/emergency">Emergency Contact</Link>

          </li>

          {/* num-07 */}

          {!admin && <li className="notification-text" tabIndex="6">

            <Link className="dash-link" to="/dashboard/take-vacation">Take Vacation</Link>


          </li>}

          {/* num-09 */}

          <li className="notification-text" tabIndex="8">
            <Link className="dash-link" to="/dashboard/news-feed" >News Feed</Link>
          </li>

          {/* num-10 */}

          {
            admin && <li className="notification-text" tabIndex="9">
              <Link className="dash-link" to="/dashboard/manage-blogs">Manage Blog</Link>
            </li>
          }

          {/* num-11 */}
          <li className="notification-text" tabIndex="8">
            <Link className="dash-link" to="/dashboard/course" >Course</Link>
          </li>
          {/* num12 */}
          {
            admin && <li className="notification-text" tabIndex="8">
              <Link className="dash-link" to="/dashboard/add-course" >Add-Course</Link>
            </li>}
        </ul>
      </div>
      <div>
        <img className=" h-screen" src="https://i.ibb.co/ypyQChc/Rapport-et-Dashboard-comprendre-la-difference-entre-les-deux-concepts.jpg" alt="" />
      </div>
    </div>
  );
};

export default DashHome;