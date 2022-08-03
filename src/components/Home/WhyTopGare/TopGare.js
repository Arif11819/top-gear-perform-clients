import React from 'react';

const TopGare = ({img, title, titleP}) => {
    return (
        <div>
            <div class="card w-96 ">
  <figure class="px-10 pt-10">
    <img src={img} height={400} alt="Shoes" class="rounded-xl" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">{title}</h2>
    <p>{titleP}</p>
    
  </div>
</div>
        </div>
    );
};

export default TopGare;