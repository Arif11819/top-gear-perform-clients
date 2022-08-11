import React from 'react';
import { IoIosCheckmarkCircle } from 'react-icons/io'

const ScheduleSubmit = () => {
    return (
        <div>
            <div className='text-center my-10'>
                <h2 className='text-3xl font-bold'>Schedule Demo</h2>
                <p className='text-blue-700 font-medium mt-2'>Request a free, personalized demo today</p>
            </div>
            <div className='flex justify-center'>
                <div>
                    <div className='flex justify-center'>
                        <IoIosCheckmarkCircle className='text-5xl text-green-700' />
                    </div>
                    <h2 className='text-xl font-bold'>Demo Booked Successfully</h2>
                    <h1 className='text-4xl font-bold'>Schedule a Call</h1>
                </div>
            </div>
        </div>
    );
};

export default ScheduleSubmit;
