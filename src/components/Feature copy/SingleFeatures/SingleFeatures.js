import React from 'react';

<<<<<<< HEAD:src/components/Feature copy/SingleFeatures/SingleFeatures.js

const SingleFeatures = ({feature}) => {
  const {name, url, description} = feature;
  return (
    <div data-aos="flip-left" data-aos-duration="1500">
      <div className="card lg:w-72 lg:h-42 bg-slate-200 shadow-xl">
          <figure className="px-20 pt-10">
            <img
              src={url}
              alt="Features Pictures"
              className="rounded-xl"
            />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title font-bold text-orange-400 text-2xl">{name}</h2>
            <p>{description}</p>
            
          </div>
        </div> 
=======
const SingleFeatures = ({ feature }) => {
  const { name, url, description } = feature;
  return (

    <div className="card lg:w-96 bg-base-100 shadow-xl" data-aos="flip-left" data-aos-duration="1500">
      <figure className="px-20 pt-20">
        <img
          src={url}
          alt="Features Pictures"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title font-bold text-3xl">{name}</h2>
        <p>{description}</p>

      </div>
>>>>>>> eeffd72d4b38f79ab19557840a477f51d791b4f8:src/components/Feature/SingleFeatures/SingleFeatures.js
    </div>

  );
};

export default SingleFeatures;