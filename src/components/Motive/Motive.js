import React from 'react';
import './Motive.css'
const Motive = () => {
    return (
        <div className='motive text-center'>
            <div className='pt-32'>
                <h2 className='text-lg text-sky-500 font-semibold'>User-Friendly, Most Intuitive</h2>
                <h2>Execute your strategies using</h2>
                <h2>the best OKR software.</h2>
                <p>Large or small, Enterprise or startup, Profit.co OKR</p>
                <p className='pb-6'>Software is a one-size-fits-all solution.</p>
                <button className='outline-btn'>SCHEDULE DEMO</button>
            </div>
            <div>
                <img className='motive-img' src="https://mir-s3-cdn-cf.behance.net/projects/max_808/2b2f8a74329609.Y3JvcCwyMTYwLDE2OTAsNDIyLDA.jpg" alt='' />
            </div>
        </div>
    );
};

export default Motive;