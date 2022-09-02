import React from "react";
import { Link } from "react-router-dom";

const PerformanceManagement = () => {
  return (
    <div className="hero my-12">
      <div className="hero-content grid lg:grid-cols-2 lg:gap-8 mx-8">
        <div>
          <img
            src="https://cdns.profit.co/site/v1.2.1/images/Performance-management.png"
            alt=""
            className="rounded-lg shadow-2xl"
          />
        </div>
        <div className=" ">
          <h1 className="lg:text-3xl text-2xl font-bold">Performance Management Software</h1>
          <p className=" text-sky-500">Focus on your goals, not your fear</p>
          <p className="lg:py-6 py-2 text-xl">
            Boost employee performance with customizable features to track and
            monitor
          </p>
          <p className="text-md lg:text-xl">
            Build a high performance workplace culture with benefits like:
          </p>

          <div>
            <ul className="mb-4 mt-4 space-y-4 text-left">
              <li className="flex hover:bg-none items-center space-x-3">

                <i className=" text-blue-500 fas fa-check-circle"></i>

                <span className='pricing-text'>360°, manager, and peer performance reviews</span>

              </li>
              <li className="flex items-center space-x-3">

                <i className=" text-blue-500 fas fa-check-circle"></i>

                <span className='pricing-text'>Skill Framework Analysis</span>
              </li>
              <li className="flex items-center space-x-3">

                <i className=" text-blue-500 fas fa-check-circle"></i>

                <span className='pricing-text'>1:1s & Team Meetings</span>


              </li>
            </ul>
          </div>

          <div className="flex items-center">
            <Link to='/schedule' className=" secondary-btn ">Get a free Demo</Link>
            <Link to='/login' className="link text-sky-400 m-3">
              Learn more →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceManagement;
