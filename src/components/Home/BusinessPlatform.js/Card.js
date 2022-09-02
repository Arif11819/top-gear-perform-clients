import React from 'react';

const Card = ({ title, img, downTitle }) => {
  return (
    <div className="card w-96 bg-slate-50 shadow-xl">

      <div className="card-body">
        <h2 className="card-title">
          <figure><img src={img} width={50} alt="tools" /></figure>
        </h2>
        <h2 className='text-2xl text-cyan-700	'>{title}</h2>
        <p>{downTitle}</p>
      </div>
    </div>
  );
};

export default Card;