import React from 'react';

const LogoCard = ({ img, title }) => {
  return (
    <div >
      <div class="card lg:w-72 w-56 bg-base-100 shadow-xl max-w-sm ">
        <figure class="px-10 pt-10">
          <img src={img} width={100} alt="Shoes" class="rounded-xl " />
        </figure>
        <div class="card-body items-center text-center">
          <h2 class="card-title">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default LogoCard;