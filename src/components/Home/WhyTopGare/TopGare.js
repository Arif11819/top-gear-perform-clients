import React from 'react';

const TopGare = ({ img, title, titleP }) => {
  return (
    <div className='bg-slate-100'>
      <div className="card w-96 ">
        <figure className="px-10 pt-10">
          <img src={img} height={400} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
          <p>{titleP}</p>

        </div>
      </div>
    </div>
  );
};

export default TopGare;