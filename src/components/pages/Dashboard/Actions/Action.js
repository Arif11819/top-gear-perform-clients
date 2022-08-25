import React from 'react';
import { Link } from 'react-router-dom'
import { BiCurrentLocation } from 'react-icons/bi';
import { FaTasks } from 'react-icons/fa';
import { MdOutlineAddLocationAlt } from 'react-icons/md';
import { AiFillMessage, AiOutlineKey, AiOutlineSchedule } from 'react-icons/ai';
import './Actions.css';

const Action = () => {
  return (
    <div>
      <ul className="menu bg-base-100 w-56 p-2  rounded-box">

        {/* num-01 */}


        <li className="actions-text" tabindex="6">
            <Link className="dash-link" to="/dashboard/reviews">Reviews</Link>
          </li>

        {/* num-02 */}


        <li className="actions-text" tabindex="6">
            <Link className="dash-link" to="/dashboard/manage-users">Manage User</Link>
          </li>
        {/* num-03 */}


        <li className="actions-text" tabindex="6">
            <Link className="dash-link" to="/dashboard/manage-book">Manage Book</Link>
          </li>

        {/* num-04 */}


        <li className="actions-text" tabindex="6">
            <Link className="dash-link" to="/dashboard/demo-details">Demo Details</Link>
          </li>

        {/* num-05 */}

        <li className="actions-text" tabindex="6">
            <Link className="dash-link" to="/dashboard/upload-file">Upload File</Link>
          </li>

        {/* num-06 */}


        <li className="actions-text" tabindex="6">
            <Link className="dash-link" to="/dashboard/vacation-select">Select Vacation</Link>
          </li>




      </ul>
    </div>
  );
};

export default Action;