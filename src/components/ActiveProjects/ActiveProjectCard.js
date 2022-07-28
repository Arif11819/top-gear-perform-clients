import React from 'react';
import './css/activeProjectCard.css'

const ActiveProjectCard = ({ projectData }) => {
    const { img, description, name } = projectData;
    return (
        <div className="card card-compact bg-base-100 shadow-xl">
            <figure className='hover:bg-slate-600'><img src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <div className="card-actions justify-start">
                    <button className="p-3 rounded-lg text-white bg-[#ED5427] hover:bg-[#e23703]">Details</button>
                </div>
            </div>
        </div>




    );
};

export default ActiveProjectCard;