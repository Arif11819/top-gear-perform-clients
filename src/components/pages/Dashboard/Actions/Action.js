import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom'
import auth from '../../../../firebase.init';
import useAdmin from '../../../../hooks/useAdmin';
import './Actions.css';

const Action = () => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <div className='flex'>
      <div >
      <ul className="menu bg-slate-50 w-56 p-2  rounded-box">

        {/* num-01 */}



        <li className="actions-text" tabIndex="6">
          <Link className="dash-link" to="/dashboard/reviews">Reviews</Link>
        </li>

        {/* num-02 */}

        {
            admin && <li className="actions-text" tabIndex="6">
            <Link className="dash-link" to="/dashboard/manage-users">Manage User</Link>
          </li>
          }
        
        {/* num-03 */}


        {
            admin && <li className="actions-text" tabIndex="6">
          <Link className="dash-link" to="/dashboard/manage-book">Manage Book</Link>
        </li>}

        {/* num-04 */}


        {
            admin && <li className="actions-text" tabIndex="6">
          <Link className="dash-link" to="/dashboard/demo-details">Demo Details</Link>
        </li>
      }

        {/* num-05 */}

        <li className="actions-text" tabIndex="6">
          <Link className="dash-link" to="/dashboard/upload-file">Upload File</Link>
        </li>

        {/* num-06 */}


        <li className="actions-text" tabIndex="6">
          <Link className="dash-link" to="/dashboard/vacation-select">Select Vacation</Link>
        </li>

        {/* num-07 */}


        <li className="actions-text" tabIndex="6">
          <Link className="dash-link" to="/dashboard/add-goal">Add Goal</Link>
        </li>
        </ul>
        </div>

        <div>
        <img className=" h-screen" src="https://i.ibb.co/ypyQChc/Rapport-et-Dashboard-comprendre-la-difference-entre-les-deux-concepts.jpg" alt="" />
      </div>


      
    </div>
  );
};

export default Action;