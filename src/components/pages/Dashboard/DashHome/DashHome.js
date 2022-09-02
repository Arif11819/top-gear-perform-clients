import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../../../firebase.init";
import useAdmin from "../../../../hooks/useAdmin";
import useManager from "../../../../hooks/useManager";
import "./DashHome.css";

const DashHome = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [manager] = useManager(user);
  return (
    <div className="flex ">
      <div>
        <ul className="menu w-56 p-2 rounded-box">
          {(admin || manager) && (
            <li className="notification-text" tabIndex="0">
              <Link className="dash-link" to="/dashboard/employee">
                All Employee
              </Link>
            </li>
          )}

          {!(admin || manager) && (
            <li className="actions-text" tabIndex="6">
              <Link className="dash-link" to="/dashboard/reviews">
                Reviews
              </Link>
            </li>
          )}

          {admin && (
            <li className="notification-text" tabIndex="1">
              <Link className="dash-link" to="/dashboard/admin">
                Admin Activity
              </Link>
            </li>
          )}

          {(admin || manager) && (
            <li className="notification-text" tabIndex="1">
              <Link className="dash-link" to="/dashboard/manager">
                Manager Activity
              </Link>
            </li>
          )}

          <li className="notification-text" tabIndex="3">
            <Link className="dash-link" to="/dashboard/notes">
              Keep Notes
            </Link>
          </li>

          {!(admin || manager) && (
            <li className="notification-text" tabIndex="5">
              <Link className="dash-link" to="/dashboard/emergency">
                Emergency Contact
              </Link>
            </li>
          )}
          {!(admin || manager) && (
            <li className="actions-text" tabIndex="6">
              <Link className="dash-link" to="/dashboard/vacation-select">
              Take Vacation
              </Link>
            </li>
          )}
          {!(admin || manager) && (
            <li className="actions-text" tabIndex="6">
              <Link className="dash-link" to="/dashboard/upload-file">
                Upload File
              </Link>
            </li>
          )}

         

          <li className="notification-text" tabIndex="8">
            <Link className="dash-link" to="/dashboard/news-feed">
              News Feed
            </Link>
          </li>

          
        </ul>
      </div>
      <div>
        <img
          className=" h-screen"
          src="https://i.ibb.co/ypyQChc/Rapport-et-Dashboard-comprendre-la-difference-entre-les-deux-concepts.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default DashHome;
