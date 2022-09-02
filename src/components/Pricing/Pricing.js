import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './pricing.css'
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { HiPhoneOutgoing, HiLocationMarker, HiOutlineMail } from "react-icons/hi";

const Pricing = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [textarea, setTextarea] = useState('');

    const sendEmail = event => {
        event.preventDefault();
        emailjs.sendForm('service_tm2tdpn', 'template_wpyuvqd', event.target, '4G3TJbMbX1vhXkKYZ', 'tdwpv6i_AVpfZ0mZGQ8d1').then(res => {
            toast.success("Thank You Sir For Your Response!!")
        }).catch(err => console.log(err));
        setName('');
        setEmail('');
        setSubject('');
        setTextarea('');
    }
    return (
        <div>
            <section className="bg-slate-50">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
                        <h2 className="mb-10 text-4xl font-extrabold text-black ">Let’s get you on the right plan!</h2>

                    </div>
                    <div className="space-y-8 mt-5 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">


                        <div className="flex flex-col p-6 mx-auto max-w-lg text-center text-black-900 bg-white rounded-lg border border-black-100 shadow xl:p-8  transform transition duration-500 hover:scale-110">
                            <h3 className="mb-4 text-2xl font-semibold">Basic</h3>
                            <p className="font-light text-black-500 sm:text-lg ">Best option for personal use & for your next project.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$200</span>
                                <span className="text-black-500 ">/month</span>
                            </div>
                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex hover:bg-none items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>

                                    <span className='pricing-text'>Regular business reviews</span>

                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>
                                    <span className='pricing-text'>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>

                                    <span className='pricing-text'>Feedback & Praise</span>


                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>
                                    <span className='pricing-text'>Customizable goal weighting</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i className="fa text-green-500 fa-check"></i>
                                    <span className='pricing-text'>Engagement training</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i className="fa text-green-500 fa-check"></i>

                                    <span className='pricing-text'>Performance review comment sentiment analysis</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i className="fa text-green-500 fa-check"></i>

                                    <span className='pricing-text'>1:1s & Team Meetings</span>
                                </li>
                            </ul>
                            <Link to="/schedule" className="text-blue-500 shadow border border-blue-700 bg-white font-bold rounded-lg px-5 py-2.5 text-center ">SCHEDULE DEMO</Link>
                        </div>

                        <div className="flex shadow-2xl flex-col p-6 mx-auto max-w-lg text-center text-white rounded-xl border border-black-100 bg-blue-500  xl:p-8 transform transition duration-500 hover:scale-110">
                            <h3 className="mb-4 text-2xl font-semibold">Premium</h3>
                            <p className="font-light sm:text-lg">Relevant for multiple users, extended & premium support.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-5xl font-extrabold">$650</span>
                                <span>/Quarter</span>
                            </div>

                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>
                                    <span className='pricing-texts'>Individual configuration</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>
                                    <span className='pricing-texts'>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i className="fa text-green-500 fa-check"></i>

                                    <span className='pricing-texts'>Goal Analytics</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>
                                    <span className='pricing-texts'>Onboarding Surveys</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>
                                    <span className='pricing-texts'>1:1s & Team Meetings</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>
                                    <span className='pricing-texts'>Onboarding Surveys</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>

                                    <span className='pricing-texts'>Compensation review setup</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>

                                    <span className='pricing-texts'>Career vision tools</span>
                                </li>
                            </ul>
                            <Link to="/schedule" className="text-blue-500 shadow border border-blue-700 bg-white font-bold rounded-lg px-5 py-2.5 text-center ">SCHEDULE DEMO</Link>
                        </div>

                        <div className="flex shadow flex-col p-6 mx-auto max-w-lg text-center text-black-900 bg-white rounded-lg border border-black-100  xl:p-8   transform transition duration-500 hover:scale-110">
                            <h3 className="mb-4 text-2xl font-semibold ">Unlimited</h3>
                            <p className="font-light text-black-500 sm:text-lg ">Best for large scale uses and extended redistribution rights.</p>
                            <div className="flex justify-center items-baseline my-8">
                                <span className="mr-2 text-3xl font-extrabold">Custom Pricing</span>
                                <span className="text-black-500 ">/Quarter</span>
                            </div>

                            <ul className="mb-8 space-y-4 text-left">
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>

                                    <span className='pricing-text'>Compensation review setup</span>

                                </li>
                                <li className="flex items-center space-x-3">
                                    <i className="fa text-green-500 fa-check"></i>

                                    <span className='pricing-text'>No setup, or hidden fees</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <i className="fa text-green-500 fa-check"></i>


                                    <span className='pricing-text'>Raise guidance based on performance data</span>


                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>

                                    <span className='pricing-text'>Career tracks</span>

                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>

                                    <span className='pricing-text'>Bonus and spot bonus</span>
                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>
                                    <span className='pricing-text'> Performance Management integration</span>

                                </li>
                                <li className="flex items-center space-x-3">

                                    <i className="fa text-green-500 fa-check"></i>
                                    <span className='pricing-text'> Employees total rewards view</span>

                                </li>

                            </ul>
                            <Link to="/schedule" className="text-blue-500 shadow border border-blue-700 bg-white font-bold rounded-lg px-5 py-2.5 text-center ">SCHEDULE DEMO</Link>
                        </div>
                    </div>
                </div>
            </section>
            <div className='contact-container bg-slate-50'>
                <div className='text-center lg:pr-0 pr-6'>

                    <h1 className='text-3xl mb-4 mt-5  text-center font-bold text-black'>Contact With Us To Discuss More</h1>

                </div>
                <div className='lg:flex lg:flex-row flex flex-col lg:px-40 px-4 lg:gap-16 gap-6'>
                    <div className='text-white lg:my-10 mt-4'>
                        <div className='flex lg:pl-0 pl-4 gap-4 lg:mb-14 mb-6 text-black'>
                            <div>
                                <HiPhoneOutgoing className='h-10 w-10 text-blue-500' />
                            </div>
                            <div>
                                <p>Call Us On</p>
                                <p>+00801303783150</p>
                            </div>
                        </div>
                        <div className='flex lg:pl-0 pl-4 gap-4 lg:mb-14 mb-6 text-black'>
                            <div>
                                <HiOutlineMail className='h-10 w-10 text-blue-500' />
                            </div>
                            <div>
                                <p>Email</p>
                                <p>top.gear.perform007@gmail.com</p>
                            </div>
                        </div>
                        <div className='flex lg:pl-0 pl-4 gap-4 text-black'>
                            <div>
                                <HiLocationMarker className='h-10 w-10 text-blue-500' />
                            </div>
                            <div>
                                <p>Visit Office</p>
                                <p>Mohammadpur, Dhaka-1207, Bangladesh </p>
                            </div>
                        </div>
                    </div>
                    <div className='text-white mx-auto lg:mt-4 lg:mb-28 mb-12'>
                        <form onSubmit={sendEmail}>
                            <div className='lg:flex lg:flex-row flex flex-col gap-3 py-6'>
                                <input onChange={event => setName(event.target.value)} value={name} className='lg:w-96 w-80 h-10 rounded-[5px] pl-6 mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' type="text" name="name" placeholder='Name' required />
                                <input onChange={event => setEmail(event.target.value)} value={email} className='lg:w-96 w-80 h-10 rounded-[5px] pl-6 mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' type="email" name="email" placeholder='Email' required />
                            </div>
                            <input onChange={event => setSubject(event.target.value)} value={subject} className='rounded-[5px] lg:w-[780px] w-80 h-[42px] pl-6  mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' type="text" name="subject" placeholder='Subject' required /><br /> <br />
                            <textarea onChange={event => setTextarea(event.target.value)} value={textarea} className='rounded-[5px] lg:w-[780px] lg:h-32 w-80 h-[150px] pl-6 pt-6 lg:w-96 w-80 h-10 rounded-[5px] pl-6 mb-4 lg:mb-0  appearance-none  relative block px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' name="message" id="" placeholder='Write Your Message' required></textarea>
                            <div className='flex'>
                                <input type="submit" className='px-3 py-1 border border-blue-300 relative group overflow-hidden font-medium bg-purple-50 text-blue-600 inline-block transition-all duration-200 ease-out transform translate-y-0 rounded-xl hover:bg-blue-500 hover:text-white group-hover:h-full opacity-90 sm:btn-md md:btn-md lg:btn-lg shadow lg:mt-6 mt-4' value="Send Message" />
                                <ToastContainer className="w-20 ml-48 pt-4" />
                            </div>
                        </form>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default Pricing;