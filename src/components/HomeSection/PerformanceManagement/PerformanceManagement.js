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
          <p className=" text-sky-500">Leverage OKRs. Ignite Performance</p>
          <p className="lg:py-6 py-2 text-xl">
            Boost employee performance with customizable features to track and
            monitor
          </p>
          <p className="text-md lg:text-xl">
            Build a high performance workplace culture with benefits like:
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
              <p className="lg:text-xl text-md lg:m-2">Highly customizable review process</p>
            </p>
            <p className="flex items-center m-2">
              {" "}
              <label>
                <input type="checkbox" className="checkbox" checked />
              </label>
              <p className="lg:text-xl text-md m-2">High-performance work culture</p>
            </p>
            <p className="flex items-center m-2">
              {" "}
              <label>
                <input type="checkbox" className="checkbox" checked />
              </label>
              <p className="lg:text-xl text-md m-2">Talent identification and nurturing</p>
            </p>
          </div>

          <div className="flex items-center">
            <Link to='/schedule' className=" secondary-btn ">Get a free Demo</Link>
            <a href="www.facebook" className="link text-sky-400 m-3">
              Learn more →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PerformanceManagement;
