import React from 'react';
import {BiCurrentLocation} from 'react-icons/bi';
import {FaTasks} from 'react-icons/fa';
import {BsPersonCheckFill} from 'react-icons/bs';
import {MdOutlineAddLocationAlt, MdBookmarkAdded} from 'react-icons/md';
import {AiFillMessage, AiOutlineKey, AiOutlineSchedule, AiOutlineMenu} from 'react-icons/ai';
import './Notification.css';


const Notifications = () => {
  return (
    <div>
      <ul class="menu bg-base-100 w-56 p-2  rounded-box">



 {/* num-01 */}
  
  <li className='notification-text' tabindex="0">
    <span><MdOutlineAddLocationAlt/>Check-in Notifications</span>
    <ul class="bg-base-100">
      <li><a href='/'>Assigned KRs</a></li>
      <li><a href='/'>KR Dependencies</a></li>
      <li><a href='/'>My Directs</a></li>
      <li><a href='/'>Watched OKRs</a></li>
    </ul>
  </li>

   {/* num-02 */}

  <li className='notification-text' tabindex="1">
    <span><AiFillMessage/>CFR</span>
    <ul class="bg-base-100">
      <li><a href='/'>@Mentions</a></li>
    </ul>
  </li>

   {/* num-03 */}


  <li className='notification-text' tabindex="2">
    <span><MdBookmarkAdded/>Execution</span>
    <ul class="bg-base-100">
      <li><a href='/'>ORK Reviews</a></li>
    </ul>
  </li>

   {/* num-04 */}


  <li className='notification-text' tabindex="3">
    <span><AiOutlineKey/>KR Controls</span>
    <ul class="bg-base-100">
      <li><a href='/'>KR Assignment Requests</a></li>
      <li><a href='/'>KR Changes</a></li>
      <li><a href='/'>KR Controls</a></li>
    </ul>
  </li>

   {/* num-05 */}


  <li className='notification-text' tabindex="4">
    <span><AiOutlineSchedule/>Meetings</span>
    <ul class="bg-base-100">
      <li><a href='/'>1:1 Meetings</a></li>
      <li><a href='/'>Scheduled Quarterly meeting rejected</a></li>
      <li><a href='/'>Quarterly Meetings</a></li>
      <li><a href='/'>Quarterly Progess Meetings</a></li>
      <li><a href='/'>Team Meetings</a></li>
      <li><a href='/'>Weekly Progress Meeting</a></li>
    </ul>
  </li>

  {/* num-06 */}


  <li className='notification-text' tabindex="5">
    <span><BsPersonCheckFill/>OKR Assigned To You</span>
    <ul class="bg-base-100">
      <li><a href='/'>KR Assigned To You</a></li>
      <li><a href='/'>KR Assigned To Your Department</a></li>
      <li><a href='/'>KR Assigned To Your Team</a></li>
      <li><a href='/'>Objective Assigned To You</a></li>
      <li><a href='/'>Objective Assigned To Your Department</a></li>
      <li><a href='/'>Objective Assigned To Your Team</a></li>
    </ul>
  </li>

  {/* num-07 */}


  <li className='notification-text' tabindex="6">
    <span><AiOutlineMenu/>OKR Backlog</span>
    <ul class="bg-base-100">
      <li><a href='/'>OKR Backlog</a></li>
      <li><a href='/'>OKR Controls</a></li>
    </ul>
  </li>

  {/* num-09 */}


  <li className='notification-text' tabindex="8">
  <span><BiCurrentLocation/>OKR Definition</span>
    <ul class="bg-base-100">
      <li><a href='/'>Lock/Unlock Requests</a></li>
      <li><a href='/'>Move OKR Requests</a></li>
    </ul>
  </li>

  {/* num-10 */}


  <li className='notification-text' tabindex="9">
  <span><FaTasks/>Tasks</span>
    <ul class="bg-base-100">
      <li><a href='/'>Assigned Tasks</a></li>
      <li><a href='/'>Reassigned Tasks</a></li>
    </ul>
  </li>



</ul>
    </div>
  );
};

export default Notifications;