import React from "react";
import { Link } from "react-router-dom";

const EmployeeEngagement = () => {
  return (
    <div className="hero my-12">
      <div className="hero-content grid lg:grid-cols-2 lg:gap-8 mx-8">
        <div className=" ">
          <h1 className="lg:text-3xl text-2xl font-bold ">Employee Engagement Software</h1>
          <p className=" text-sky-500">Build Trust. Boost Engagement</p>
          <p className="lg:py-6 py-2 text-xl">
            Engagement with a peer-based award and recognition program
          </p>
          <p className="text-md lg:text-xl">
            Strengthen employee engagement and measure satisfaction with these
            key features from Profit.co:
          </p>

          <div>
            <p className="flex items-center lg:m-2 m-4">
              {" "}
              <label>
                <input
                  type="checkbox"
                  className="checkbox"
                  checked
                />
              </label>
              <p className="lg:text-xl text-md lg:m-2">Employee awards</p>
            </p>
            <p className="flex items-center m-2">
              {" "}
              <label>
                <input type="checkbox" className="checkbox" checked />
              </label>
              <p className="lg:text-xl text-md m-2">Pulse surveys</p>
            </p>
            <p className="flex items-center m-2">
              {" "}
              <label>
                <input type="checkbox" className="checkbox" checked />
              </label>
              <p className="lg:text-xl text-md m-2">Company news feed</p>
            </p>
          </div>

          <div className="flex items-center">
            <Link to='/schedule' className=" secondary-btn ">Get a free Demo</Link>
            <a href="www.facebook" className="link text-sky-400 m-3">
              Learn more →
            </a>
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
