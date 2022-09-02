import React from 'react';
import Card from './Card';

// https://i.ibb.co/rybgRcj/juicy-web-designer-girl-making-landing-page-with-video-color-palette-and-site-blocks.png
// https://i.ibb.co/YRkSPTC/transistor-analytics-of-work-on-schedule-in-teamwork-of-people.png
// https://i.ibb.co/44GtJYY/teams-planning-and-discussion-of-new-ideas-by-men.png


const BusinessPlatform = () => {
    return (
        <div>
            <h1 className='text-4xl text-center font-bold'>Experience the world’s best
                <br /> iterative business execution platform
            </h1>

            <p className='text-center text-xl text-gray-400'>Grow your business with our All-Inclusive Employee Management Tool</p>

            <p className='text-center text-xl text-gray-400'>Grow your business with our All-Inclusive Top Gear's Tool</p>

            <div className="hero ">

                <div className="hero-content flex-col lg:flex-row-reverse">

                    <img src="https://i.ibb.co/xCyYYns/Logo.png" className="rounded-lg lg:w-96 lg:ml-20 ml-0" alt='video icon' />

                    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-20 sm:mt-10 '>
                        <Card img="https://i.ibb.co/1dPFd8f/task-list.png" title={'Task Management '} downTitle={`Track Better. Do More.`} />
                        <Card img="https://i.ibb.co/h8WJLh0/employee.png" title={'Employee Engagement '} downTitle={`Build Trust. Boost Engagement.`} />
                        <Card img="https://i.ibb.co/rv3sq23/archery.png" title={`Progess Management `} downTitle={`Focus. Measure. Achieve.`} />
                        <Card img="https://i.ibb.co/2PG9HsK/growth.png" title={`Performance Management`} downTitle={`Leverage OKRs. Ignite Performance.`} />

                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessPlatform;