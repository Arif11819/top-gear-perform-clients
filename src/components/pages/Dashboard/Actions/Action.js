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
      <ul class="menu bg-base-100 w-56 p-2  rounded-box">

        {/* num-01 */}


        <li className='actions-text' tabindex="0">
          <span><AiOutlineKey />KR Controls</span>
          <ul class="bg-base-100">.
            <li><a href='/'>KR Alignment Requests</a></li>
            <li><a href='/'>KR Assignment Requests</a></li>
            <li><a href='/'>KR Dependency Requests</a></li>
          </ul>
        </li>

        {/* num-02 */}


        <li className='actions-text' tabindex="1">
          <span><AiOutlineSchedule />Meetings</span>
          <ul class="bg-base-100">
            <li><a href='/'>Weekly Meeting</a></li>
            <li><a href='/'>1:1 Meetings</a></li>
            <li><a href='/'>Quarterly Meetings</a></li>
            <li><a href='/'>Quarterly Progess Meetings</a></li>
            <li><a href='/'>Team Meetings</a></li>
            <li><a href='/'>Weekly Progress Meeting</a></li>
          </ul>
        </li>
        {/* num-03 */}


        <li className='actions-text' tabindex="2">
          <span><BiCurrentLocation />OKR Definition</span>
          <ul class="bg-base-100">
            <li><a href='/'>Lock/Unlock Requests</a></li>
            <li><a href='/'>Move OKR Requests</a></li>
            <li><a href='/'>OKR Alignment Requests</a></li>
            <li><a href='/'>OKR Dependency Requests</a></li>
          </ul>
        </li>

        {/* num-04 */}


        <li className='actions-text' tabindex="3">
          <span><MdOutlineAddLocationAlt />Pending Check-ins</span>
          <ul class="bg-base-100">
            <li><a href='/'>Due Today</a></li>
            <li><a href='/'>Overdue</a></li>
          </ul>
        </li>

        {/* num-05 */}

        <li className='actions-text' tabindex="4">
          <span><AiFillMessage />Servey Feedback</span>
          <ul class="bg-base-100">
            <li><a href='/'>Servey Feedback Request</a></li>
          </ul>
        </li>

        {/* num-06 */}


        <li className='actions-text' tabindex="5">
          <Link to='/dashboard/task'><FaTasks />Tasks</Link>

        </li>




      </ul>
    </div>
  );
};

export default Action;