import React from 'react';
import './Motive.css'
const Motive = () => {
    return (
        <div className="hero bg-slate-100">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://mir-s3-cdn-cf.behance.net/projects/max_808/2b2f8a74329609.Y3JvcCwyMTYwLDE2OTAsNDIyLDA.jpg" alt='' className="max-w-sm rounded-lg" />
                <div>
                    <h1 className="text-3xl font-bold">Execute your own</h1>
                    <h1 className="text-3xl font-bold">strategies using our website</h1>
                    <p className="py-6">We provide our best services to the company, whether bigger or smaller. All the registered companies will get the same attention from us and we will try to give the best possible marketing solution to help the company's growth.</p>
                    <button className="explore-btn">Explore Us Free</button>
                </div>
            </div>
        </div>
    );
};

export default Motive;