import React from 'react';
import { Link } from 'react-router-dom';
import './Focus.css'
const Focus = () => {
  return (
    <div>
      <ul className="menu bg-slate-50 w-56 p-2 rounded-box">
        <li className="actions-text" tabIndex="6">
          <Link className="dash-link" to="/dashboard/reviews">Reviews</Link>
        </li>

        {/* num-02 */}


        <li className="actions-text" tabIndex="6">
          <Link className="dash-link" to="/dashboard/manage-users">Manage User</Link>
        </li>

        {/* num-03 */}

        <li className="notification-text" tabIndex="2">
          <span>Top Gear OkRs</span>
        </li>

        {/* num-04 */}

        <li className="notification-text" tabIndex="3">
          <span>My Org's OKRs</span>
        </li>

        {/* num-05 */}

        <li className="notification-text" tabIndex="4">
          <span>Watched OKRs</span>
        </li>

        {/* num-06 */}

        <li className="notification-text" tabIndex="5">
          <span>Shared OKRs</span>
        </li>

        {/* num-07 */}

        <li className="notification-text" tabIndex="6">
          <span>OKRs by KPIs</span>
          <ul className="bg-slate-50">
            <li>
              <a href="/">All</a>
              <a href="/">Watched</a>
            </li>
          </ul>
        </li>

        {/* num-09 */}

        <li className="notification-text" tabIndex="8">
          <span>All Employess' OKRs</span>
        </li>
        {/* num-09 */}

        <li className="notification-text" tabIndex="8">
          <span>All Departments' OKRs</span>
        </li>
        {/* num-09 */}

        <li className="notification-text" tabIndex="8">
          <span>Manager's ORKs</span>
        </li>

        {/* num-07 */}

        <li className="notification-text" tabIndex="6">
          <span>OKRs Program Status</span>
          <ul className="bg-slate-50">
            <li>
              <a href="/">OKRs Authoring</a>
              <a href="/">OKRs Progress</a>
              <a href="/">KRs Progress</a>
              <a href="/">KRs Without Tasks</a>
              <a href="/">OKRs Fullfillments</a>
              <a href="/">Pending Check-ins</a>
              <a href="/">My Org Pending Check-ins</a>
              <a href="/">User Login History</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Focus;