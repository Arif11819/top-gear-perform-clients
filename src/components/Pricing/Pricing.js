import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Let’s get you on the right plan!</h2>

                    </div>
                    <div className="space-y-8 mt-5 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">


                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transform transition duration-500 hover:scale-110">
                            <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best option for personal use & for your next project.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$200</span>
                                <span className="text-gray-500 dark:text-gray-400">/month</span>
                            </div>

                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <i class="fa text-green-500 fa-check"></i>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i class="fa text-green-500 fa-check"></i>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i class="fa text-green-500 fa-check"></i>
                                    <span>Team size: <span className="font-semibold">1 developer</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i class="fa text-green-500 fa-check"></i>
                                    <span>Premium support: <span className="font-semibold">6 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i class="fa text-green-500 fa-check"></i>

                                    <span>Free updates: <span className="font-semibold">6 months</span></span>
                                </li>
                            </ul>
                            <Link to="/" className="text-white bg-blue-600 font-bold hover:text-white rounded-lg px-5 py-2.5 text-center ">SCHEDULE DEMO</Link>
                        </div>

                        <div className="flex shadow-2xl flex-col p-6 mx-auto max-w-lg text-center text-white rounded-xl border border-gray-100 bg-blue-500 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transform transition duration-500 hover:scale-110">
                            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
                            <p className="font-light sm:text-lg">Relevant for multiple users, extended & premium support.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$650</span>
                                <span>/Quarter</span>
                            </div>

                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <i class="fa text-green-500 fa-check"></i>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i class="fa text-green-500 fa-check"></i>
                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i class="fa text-green-500 fa-check"></i>

                                    <span>Team size: <span className="font-semibold">10 developers</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i class="fa text-green-500 fa-check"></i>
                                    <span>Premium support: <span className="font-semibold">24 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i class="fa text-green-500 fa-check"></i>

                                    <span>Free updates: <span className="font-semibold">24 months</span></span>
                                </li>
                            </ul>
                            <Link to="/" className="text-blue-500 shadow border border-blue-700 bg-white font-bold rounded-lg px-5 py-2.5 text-center ">SCHEDULE DEMO</Link>
                        </div>

                        <div className="flex shadow flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white transform transition duration-500 hover:scale-110">
                            <h3 className="mb-4 text-2xl font-semibold ">Unlimited</h3>
                            <p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">Best for large scale uses and extended redistribution rights.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-3xl font-extrabold">Custom Pricing</span>
                                <span className="text-gray-500 dark:text-gray-400">/Quarter</span>
                            </div>

                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <i class="fa text-green-500 fa-check"></i>
                                    <span>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i class="fa text-green-500 fa-check"></i>

                                    <span>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i class="fa text-green-500 fa-check"></i>
                                    <span>Team size: <span className="font-semibold">100+ developers</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i class="fa text-green-500 fa-check"></i>
                                    <span>Premium support: <span className="font-semibold">36 months</span></span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i class="fa text-green-500 fa-check"></i>
                                    <span>Free updates: <span className="font-semibold">36 months</span></span>
                                </li>
                            </ul>
                            <a href="/" className="text-white bg-blue-600 font-bold hover:text-white rounded-lg px-5 py-2.5 text-center ">SCHEDULE DEMO</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Pricing;