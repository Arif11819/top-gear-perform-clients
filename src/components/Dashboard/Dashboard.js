import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className='dashboard-container'>
            <h1 className='text-5xl text-center pt-10 pb-4 font-bold'>Dash-board</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3'>
                <div data-aos="zoom-in" data-aos-duration="2500" className=' img-container'><img className='w-2/3' src="https://i.ibb.co/ZLkGKRN/Social-Dashboard-rafiki.png" alt="" /></div>
                <div data-aos="zoom-in" data-aos-duration="2500" className=' img-container'><img className='w-2/3' src="https://i.ibb.co/xMcXfLd/Setup-Analytics-bro.png" alt="" /></div>
                <div data-aos="zoom-in" data-aos-duration="2500" className=' img-container'><img className='w-2/3' src="https://i.ibb.co/dJm3X4m/Dashboard-bro.png" alt="" /></div>
            </div>
        </div>
    );
};

export default Dashboard;