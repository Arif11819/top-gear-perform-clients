import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../../firebase.init';
import useAdmin from '../../../../hooks/useAdmin';
import useManager from '../../../../hooks/useManager';

const Manager = () => { 
  const [user] = useAuthState(auth);
  const [manager] = useManager(user);
  const [admin] = useAdmin(user);
  return (
    <div className='flex'>
      <div >
      <ul className="menu bg-slate-50 w-56 p-2  rounded-box">

       
        {
           (admin || manager) && <li className="actions-text" tabIndex="6">
            <Link className="dash-link" to="/dashboard/manage-users">Manage User</Link>
          </li>
          }


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


         <li className="notification-text" tabIndex="1">
              <Link className="dash-link" to="/dashboard/chatrequest">Chat Request</Link>
            </li>
          

        </ul>
        </div>

        <div>
        <img className=" h-screen" src="https://i.ibb.co/ypyQChc/Rapport-et-Dashboard-comprendre-la-difference-entre-les-deux-concepts.jpg" alt="" />
      </div>


      
    </div>
  );
};


export default Manager;