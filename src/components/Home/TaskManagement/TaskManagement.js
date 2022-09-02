import React from 'react';
import './TaskManagement.css';
import { Link } from 'react-router-dom';
const TaskManagement = () => {
    return (
        <div className="">
            <div className="hero my-12 ">
                <div className="hero-content grid grid-cols-1 lg:grid-cols-2 gap-10 mx-8">
                    <div>
                        <h1 className="text-3xl font-bold ">Goal Management Software</h1>
                        <p className=" text-sky-500 pt-3">Track Better. Do More.</p>
                        <p className="py-6 text-2xl">
                            Make your team’s work more efficient with <br /> our intuitive Task Management Software
                        </p>
                        <p className="text-xl">
                            Connect day-to-day work to higher order company <br /> goals and harvest benefits like:
                        </p>

                        <div>
                            <ul className="mb-4 mt-4 space-y-4 text-left">
                                <li className="flex hover:bg-none items-center space-x-3">

                                    <i className=" text-blue-500 fas fa-check-circle"></i>

                                    <span className='pricing-text'>Goal management training</span>

                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className=" text-blue-500 fas fa-check-circle"></i>

                                    <span className='pricing-text'>Goal Analytics</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className=" text-blue-500 fas fa-check-circle"></i>

                                    <span className='pricing-text'>Activity Feed</span>


                                </li>
                            </ul>
                        </div>

                        <div className="flex items-center justify-start pt-3">
                            <Link to='/schedule' className="secondary-btn">Get a free Demo</Link>
                            <Link to='/login' className="link text-sky-400 m-3">
                                Learn more →
                            </Link>
                        </div>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="1000">
                        <img
                            src="https://i.ibb.co/B2Wcjd1/Screenshot-9.png"
                            alt=""
                            className="rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskManagement;