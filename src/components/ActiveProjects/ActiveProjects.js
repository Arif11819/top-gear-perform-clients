import React, { useEffect, useState } from 'react';
import ActiveProjectCard from './ActiveProjectCard';

const ActiveProjects = () => {
    const [projectsData, setProjectsData] = useState([]);
    useEffect(() => {
        fetch('activeProjects.json')
            .then(res => res.json())
            .then(data => setProjectsData(data))
    }, [])
    return (
        <div>
            <div className='my-5'>
                <h2 className='text-5xl font-bold text-center text-white py-8'>Active Projects</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-10 w-fit mx-auto'>
                {
                    projectsData.map(projectData => <ActiveProjectCard key={projectData.id} projectData={projectData} />)
                }
            </div>
        </div>
    );
};

export default ActiveProjects;