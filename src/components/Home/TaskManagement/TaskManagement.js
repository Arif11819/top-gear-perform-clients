import React from 'react';
import './TaskManagement.css'

const TaskManagement = () => {
    return (
        <div className="bg-base-200">
            <div class="hero min-h-screen ">
                <div class="hero-content grid grid-cols-2 gap-10 mx-8">
                    <div className=" ">
                        <h1 class="text-3xl font-bold ">Task Management Software</h1>
                        <p className=" text-sky-500 pt-3">Track Better. Do More.</p>
                        <p class="py-6 text-2xl">
                            Make your team’s work more efficient with our intuitive Task Management Software
                        </p>
                        <p className="text-xl">
                            Connect day-to-day work to higher order company goals and harvest benefits like:
                        </p>

                        <div className='pt-8'>
                            <p className="flex items-center m-2">
                                {" "}
                                <label>
                                    <input
                                        className="mx-3"
                                        type="checkbox"
                                        class="checkbox"
                                        checked
                                    />
                                </label>
                                <p className="text-xl m-2">Tasks aligned with OKRs</p>
                            </p>
                            <p className="flex items-center m-2">
                                {" "}
                                <label>
                                    <input type="checkbox" class="checkbox" checked />
                                </label>
                                <p className="text-xl m-2">Manage team’s workflow</p>
                            </p>
                            <p className="flex items-center m-2">
                                {" "}
                                <label>
                                    <input type="checkbox" class="checkbox" checked />
                                </label>
                                <p className="text-xl m-2">Streamlined Project Execution</p>
                            </p>
                        </div>

                        <div className="flex items-center pt-3">
                            <button class=" secondary-btn ">Get a free Demo</button>
                            <a href="www.facebook" class="link text-sky-400 m-3">
                                Learn more →
                            </a>
                        </div>
                    </div>
                    <div>
                        <img
                            src="https://i.ibb.co/dkJXn1J/Task-management.png"
                            alt=""
                            class="rounded-lg shadow-2xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskManagement;