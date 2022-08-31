import React from "react";
import { Link } from "react-router-dom";
import "./Manage.css";

const Management = () => {
  return (
    <div className="">
      <h1 className="text-center pt-10 font-bold text-black text-2xl lg:text-4xl">
        Manage your strategy, OKRs, people, process and <br /> <span className="text-sky-500">performance in
          one platform</span>
      </h1>
      <div className="hero lg:min-h-screen ">
        <div className="hero-content grid lg:grid-cols-2 lg:gap-8 mx-8">
          <div>
            <img
              src="https://i.ibb.co/B2Wcjd1/Screenshot-9.png"
              alt=""
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className=" ">
            <h1 className="lg:text-3xl text-2xl font-bold ">Task Management Software</h1>
            <p className=" text-sky-500">Focus. Measure. Achieve.</p>
            <p className="lg:py-6 py-2 text-xl">
              Bridge your strategy-execution gap using TopGear Employee Management
            </p>
            <p className="text-md lg:text-xl">
              Take advantage of this powerful goal-setting framework with
              benefits like:
            </p>

            <div>
              <ul className="mb-4 mt-4 space-y-4 text-left">
                <li className="flex hover:bg-none items-center space-x-3">

                  <i className=" text-blue-500 fas fa-check-circle"></i>

                  <span className='pricing-text'>Task Analytics</span>

                </li>
                <li className="flex items-center space-x-3">

                  <i className=" text-blue-500 fas fa-check-circle"></i>

                  <span className='pricing-text'>Faster adaptation and execution</span>
                </li>
                <li className="flex items-center space-x-3">

                  <i className=" text-blue-500 fas fa-check-circle"></i>

                  <span className='pricing-text'>Feedback & Praise</span>


                </li>
              </ul>
            </div>

            <div className="flex items-center">
              <Link to='/schedule' className=" secondary-btn ">Get a free Demo</Link>
              <Link to="/login" className="link text-sky-400 m-3">
                Learn more →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
