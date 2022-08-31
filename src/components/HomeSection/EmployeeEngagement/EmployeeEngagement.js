import React from "react";
import { Link } from "react-router-dom";

const EmployeeEngagement = () => {
  return (
    <div className="hero min-h-screen ">
      <div className="hero-content grid lg:grid-cols-2 lg:gap-8 mx-8">
        <div className=" ">
          <h1 className="lg:text-3xl text-2xl font-bold ">Employee Engagement Software</h1>
          <p className=" text-sky-500">Build Trust. Boost Engagement</p>
          <p className="lg:py-6 py-2 text-xl">
            Engagement with a peer-based award and recognition program
          </p>
          <p className="text-md lg:text-xl">
            Strengthen employee engagement and measure satisfaction with these
            key features from TopGear Perform:
          </p>

          <div>
            <ul className="mb-4 mt-4 space-y-4 text-left">
              <li className="flex hover:bg-none items-center space-x-3">

                <i className=" text-blue-500 fas fa-check-circle"></i>

                <span className='pricing-text'>Engagement training</span>

              </li>
              <li className="flex items-center space-x-3">

                <i className=" text-blue-500 fas fa-check-circle"></i>

                <span className='pricing-text'>Employee awards</span>
              </li>
              <li className="flex items-center space-x-3">

                <i className=" text-blue-500 fas fa-check-circle"></i>

                <span className='pricing-text'>Company news feed</span>


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
        <div>
          <img
            src="https://i.ibb.co/p3JFF30/Screenshot-10.png"
            alt=""
            className="rounded-lg shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeEngagement;
