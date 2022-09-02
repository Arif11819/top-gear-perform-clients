import React from 'react';

const Card = ({title, img, downTitle}) => {
    return (
      <div class="card w-96  shadow-xl">
      
      <div class="card-body">
        <h2 class="card-title">
        <figure><img src={img} width={50} alt="Shoes" /></figure>
        </h2>
        <h2 className='text-2xl text-cyan-700	'>{title}</h2>
        <p>{downTitle}</p>
      </div>
    </div>
    );
};

export default Card;