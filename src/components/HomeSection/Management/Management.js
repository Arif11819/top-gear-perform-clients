import React from "react";
import "./Manage.css";

const Management = () => {
  return (
    <div className="bg-base-200">
      <h1 className="text-center pt-10 font-bold text-black text-2xl lg:text-4xl">
        Manage your strategy, OKRs, people, process and <br /> <span className="text-sky-500">performance in
        one platform</span> 
      </h1>
      <div className="hero lg:min-h-screen ">
        <div className="hero-content grid lg:grid-cols-2 lg:gap-8 mx-8">
          <div>
            <img
              src="https://cdns.profit.co/site/v1.2.1/images/OKR-management.png"
              alt=""
              className="rounded-lg shadow-2xl"
            />
          </div>
          <div className=" ">
            <h1 className="lg:text-3xl text-2xl font-bold ">OKR Management Software</h1>
            <p className=" text-sky-500">Focus. Measure. Achieve.</p>
            <progress className="progress w-56"></progress>
            <p className="lg:py-6 py-2 text-xl">
              Bridge your strategy-execution gap using Profit.co OKR Software
            </p>
            <p className="text-md lg:text-xl">
              Take advantage of this powerful goal-setting framework with
              benefits like:
            </p>

            <div>
              <p className="flex items-center lg:m-2 m-4">
                {" "}
                <label>
                  <input
                    type="checkbox"
                    className="checkbox "
                    checked
                  />
                </label>
                <p className="lg:text-xl text-md lg:m-2"> Agile alignment</p>
              </p>
              <p className="flex items-center m-2">
                {" "}
                <label>
                  <input type="checkbox" className="checkbox " checked />
                </label>
                <p className="lg:text-xl text-md m-2">Faster adaptation and execution</p>
              </p>
              <p className="flex items-center m-2">
                {" "}
                <label>
                  <input type="checkbox" className="checkbox " checked />
                </label>
                <p className="lg:text-xl text-md m-2">Guided weekly check-ins</p>
              </p>
            </div>

            <div className="flex items-center">
              <button className=" secondary-btn ">Get a free Demo</button>
              <a href="www.facebook" className="link text-sky-400 m-3">
                Learn more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
