import React, { useState } from 'react';
import './ContactUs.css';
import emailjs from 'emailjs-com';
import { ToastContainer, toast } from 'react-toastify';
import { HiPhoneOutgoing, HiLocationMarker, HiOutlineMail } from "react-icons/hi";

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [textarea, setTextarea] = useState('');

    const sendEmail = event => {
        event.preventDefault();
        emailjs.sendForm('service_tm2tdpn', 'template_wpyuvqd', event.target, '4G3TJbMbX1vhXkKYZ', 'tdwpv6i_AVpfZ0mZGQ8d1').then(res => {
            toast.success("Thank You")
        }).catch(err => console.log(err));
        setName('');
        setEmail('');
        setSubject('');
        setTextarea('');
    }

    return (
        <div className='contact-container '>
            <div className='text-center lg:pr-0 pr-6'>
                <h1 className='lg:text-3xl text-2xl px-24 font-bold text-white pt-16'>Get In Touch</h1>
                <h2 className='lg:text-2xl pb-6 text-teal-300'>Emergence and design of the idea</h2>
            </div>
            <div className='lg:flex lg:flex-row flex flex-col lg:px-40 px-4 lg:gap-16 gap-6'>
                <div className='text-white lg:my-10 mt-4'>
                    <div className='flex lg:pl-0 pl-4 gap-4 lg:mb-14 mb-6'>
                        <div>
                            <HiPhoneOutgoing className='h-10 w-10 text-green-200' />
                        </div>
                        <div>
                            <p>Call Us On</p>
                            <p>+00801303783150</p>
                        </div>
                    </div>
                    <div className='flex lg:pl-0 pl-4 gap-4 lg:mb-14 mb-6'>
                        <div>
                            <HiOutlineMail className='h-10 w-10 text-green-200' />
                        </div>
                        <div>
                            <p>Email</p>
                            <p>top.gear.perform007@gmail.com</p>
                        </div>
                    </div>
                    <div className='flex lg:pl-0 pl-4 gap-4'>
                        <div>
                            <HiLocationMarker className='h-10 w-10 text-green-200' />
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
                            <input onChange={event => setName(event.target.value)} value={name} className='lg:w-96 w-80 h-10 rounded-[5px] pl-6 mb-4 lg:mb-0 text-black' type="text" name="name" placeholder='Name' required />
                            <input onChange={event => setEmail(event.target.value)} value={email} className='lg:w-96 w-80 h-10 rounded-[5px] pl-6 text-black' type="email" name="email" placeholder='Email' required />
                        </div>
                        <input onChange={event => setSubject(event.target.value)} value={subject} className='rounded-[5px] lg:w-[780px] w-80 h-[42px] pl-6 text-black' type="text" name="subject" placeholder='Subject' required /><br /> <br />
                        <textarea onChange={event => setTextarea(event.target.value)} value={textarea} className='rounded-[5px] lg:w-[780px] lg:h-32 w-80 h-[150px] pl-6 pt-6 text-black' name="message" id="" placeholder='Write Your Message' required></textarea>
                        <div className='flex'>
                            <input type="submit" className='btn sm:btn-md md:btn-md lg:btn-lg text-green-600 bg-white lg:mt-6 mt-4' value="Send Message" />
                            <ToastContainer className="w-20 ml-48 pt-4" />
                        </div>
                    </form>

                </div>
            </div>
        </div>

    );
};

export default ContactUs;