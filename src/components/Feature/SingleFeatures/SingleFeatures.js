import React from 'react';

const SingleFeatures = ({feature}) => {
  const {name, url, description} = feature;
  return (
    <div data-aos="flip-left" data-aos-duration="1500">
      <div className="card w-96 bg-base-100 shadow-xl">
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
        </div> 
    </div>
  );
};

export default SingleFeatures;