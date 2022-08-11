import React from 'react';
import Motive from '../Motive/Motive';
import './Praise.css'
const Praise = () => {
    return (
        <div>
            <Motive></Motive>
            <h1 className='text-4xl mb-4 mt-4 text-center font-bold text-slate-900'>Why Our Customers Love Us?</h1>
            <div className='justify-items-center praise mx-auto px-10 py-10 '>
                <div className="card transform transition duration-500 hover:scale-110 w-80 bg-base-100 ">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/KGFZN0P/6a16e2d4-earliest-badge.png" alt="html-icon" className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Easiest to do business with Enterprise</h2>
                        <p>The Easiest doing business with product in the relationship index earned the highest ease of doing business with rating in the category.</p>

                    </div>
                </div>
                <div className="card transform transition duration-500 hover:scale-110 w-80 bg-base-100 shadow">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/4gSM52X/7f8850a5-high-performer-enterprise.png" alt="html-icon" className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Higher Performer Enterprise</h2>
                        <p>Products in the High Performer quadrant in the Enterprise Grid Report have high customer Satisfaction scores and low Market Presence scores compared to the rest of the category</p>

                    </div>
                </div>
                <div className="card transform transition duration-500 hover:scale-110 w-80 bg-base-100 shadow">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/yyxfnG1/ecdcd833-leader-summer-2022.png" alt="html-icon" className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Leader</h2>
                        <p>Product in the leader quadrant in the grid report are highly by Global users and have substantial satisfaction and market presence scores.</p>

                    </div>
                </div>
                <div className="card transform transition duration-500 hover:scale-110 w-80 bg-base-100 shadow">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/1ZzMRNW/27b458d8-best-support-enterprise.png" alt="html-icon" className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Best Support Enterprise</h2>
                        <p>The highest quality of support product in the relationship index earned the highest quality of support rating in category.</p>

                    </div>
                </div>
                <div className="card transform transition duration-500 hover:scale-110 w-80 bg-base-100 shadow">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/zGVZwxW/fdb05511-momentum-leader-summer.png" alt="html-icon" className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">Momentum Leader</h2>
                        <p>Products in the leader tier in the momentum grid rank in the top few percentage of their categories product by their users.</p>

                    </div>
                </div>
                <div className="card transform transition duration-500 hover:scale-110 w-80 bg-base-100 shadow">
                    <figure className="px-10 pt-10">
                        <img src="https://i.ibb.co/b2T3TPz/af4ad196-asia-pacific-summer.png" alt="html-icon" className="rounded-xl w-20" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title">High Performer</h2>
                        <p>Products in the High Performer quadrant in the Asia Regional Grid Report have high customer Satisfaction scores and low Market Presence scores compared to the rest of the category</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Praise;