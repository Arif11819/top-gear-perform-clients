import React from 'react';

const Card = ({img, title, downTitle}) => {
    return (
        <div>
            <div class="card lg:card-side bg-base-100 shadow-xl p-4">
  <figure><img src={img} width={100} alt="Album"/></figure>
  <div class="card-body">
    <h2 class="card-title text-cyan-500 hover:text-sky-500 ">{title}</h2>
    <p className='hover:text-sky-700'>{downTitle}</p>
    
  </div>
</div>
        </div>
    );
};

export default Card;