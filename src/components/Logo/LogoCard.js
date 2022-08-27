import React from 'react';

const LogoCard = ({ img, title }) => {
  return (
    <div >
      <div className="card lg:w-72 w-56 bg-slate-50 shadow-xl max-w-sm ">
        <figure className="px-10 pt-10">
          <img src={img} width={100} alt="Shoes" className="rounded-xl " />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default LogoCard;