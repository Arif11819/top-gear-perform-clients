import React, { useEffect, useState } from "react";
import SingleFeatures from "../SingleFeatures/SingleFeatures";
import './Features.css';

const Features = () => {
  const [features, setfeatures] = useState([]);

  useEffect(() => {
    fetch("features.json")
      .then((res) => res.json())
      .then((data) => setfeatures(data));
  }, []);

  return (
    <div className="bg-slate-100">
      <div className=" card-container py-20">
        <h1 className="text-center bg-black-300 text-4xl lg:text-6xl m-4 text-white font-bold">
          Explore TopGear Features
        </h1>
        <p className="text-center text-xl text-white m-8">
          Learn about more our website features
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 m-14">
          {features.map((feature) => (
            <SingleFeatures
              key={feature._id}
              feature={feature}
            ></SingleFeatures>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
