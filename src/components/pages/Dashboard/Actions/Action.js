import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../../../firebase.init';
import useAdmin from '../../../../hooks/useAdmin';
import useManager from '../../../../hooks/useManager';
import './Actions.css';

const Action = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [manager] = useManager(user);
  return (
    <div className='flex'>
      <div >
      <ul className="menu bg-slate-50 w-56 p-2  rounded-box">




      

         {
            (admin || manager) && <li className="notification-text" tabIndex="1">
              <Link className="dash-link" to="/dashboard/employeesvacation">Employees All Vacation</Link>
            </li>
          }

          {
            (admin || manager) && <li className="notification-text" tabIndex="1">
              <Link className="dash-link" to="/dashboard/employeesgoal">Employees All Goal</Link>
            </li>
          }

        {
            admin && <li className="actions-text" tabIndex="6">
            <Link className="dash-link" to="/dashboard/manage-users">Manage User</Link>
          </li>
          }
        


        {
            admin && <li className="actions-text" tabIndex="6">
          <Link className="dash-link" to="/dashboard/manage-book">Manage Book</Link>
        </li>}

        {
            admin &&  <li className="actions-text" tabIndex="6">
          <Link className="dash-link" to="/dashboard/manage-blogs">Manage Blogs</Link>
        </li>
}


        {
            admin && <li className="actions-text" tabIndex="6">
          <Link className="dash-link" to="/dashboard/demo-details">Manage Demo Details</Link>
        </li>
      }

        {
            admin && <li className="notification-text" tabIndex="8">
              <Link className="dash-link" to="/dashboard/add-course" >Add-Course</Link>
            </li>}


            {
            (admin || manager) &&  <li className="notification-text" tabIndex="1">
              <Link className="dash-link" to="/dashboard/chatrequest">Chat Request</Link>
            </li>}
          

        </ul>
        </div>

        <div>
        <img className=" h-screen" src="https://i.ibb.co/ypyQChc/Rapport-et-Dashboard-comprendre-la-difference-entre-les-deux-concepts.jpg" alt="" />
      </div>


      
    </div>
  );
};

export default Action;