import React from 'react';
import { useParams } from 'react-router-dom';

const ActiveProjectDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h2 className='text-xl text-white text-center'>Selected id: {id}</h2>
        </div>
    );
};

export default ActiveProjectDetails;