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
<<<<<<< HEAD:src/components/Feature copy/Features/Features.js
    <div className="bg-slate-100">
      <div className=" card-container lg:px-40 lg:py-20">
        <h1 className="text-center bg-black-300 text-4xl lg:text-6xl lg:m-4 text-white font-bold">
          Explore<span className="text-orange-500"> TopGear Features</span>
=======
  
      <div className="lg:py-20 py-10">
        <h1 className="text-center bg-black-300 text-4xl lg:text-6xl  text-white font-bold">
          Explore TopGear Features
>>>>>>> eeffd72d4b38f79ab19557840a477f51d791b4f8:src/components/Feature/Features/Features.js
        </h1>
        <p className="text-center text-xl text-orange-500 m-8">
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
    
  );
};

export default Features;
