import React from 'react';
import './css/activeProjectCard.css'

const ActiveProjectCard = ({ projectData }) => {
    const { img, name } = projectData;
    return (
        <div className="project-card">
            <img className='project-img' src={img} alt="" />
            <p className="project-title">{name}</p>
            <div className="overlay"></div>
            <div className="project-button"><a href="#"> Details </a></div>
        </div>




    );
};

export default ActiveProjectCard;