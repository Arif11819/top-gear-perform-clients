import React, { useState } from 'react';
import ScheduleCalender from './ScheduleCalender';
import './ScheduleDemo.css'
import ScheduleOption from './ScheduleOption';
import { format } from 'date-fns';
import UserInput from './UserInput';
import UserCount from './UserCount';
import { MdCall } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'

const ScheduleDemo = () => {
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('')
    return (
        <div>
            <div className='text-center my-10'>
                <h2 className='text-3xl font-bold'>Schedule Demo</h2>
                <p className='text-blue-700 font-medium mt-2'>Request a free, personalized demo today</p>
            </div>
            <div className='md:w-2/5 mx-auto bg-white rounded shadow-lg pt-4'>
                <div>
                    <ScheduleOption />

                </div>
                <p className='ml-3 my-4 text-slate-500'>Date</p>
                <div className='p-4'>
                    <ScheduleCalender date={date} setDate={setDate} time={time} setTime={setTime} />
                    <p className='bg-[#cbe2f7] p-3 font-bold text-sm'>Selected Date: {format(date, 'PPPP')} {time}</p>
                </div>
                <div className='flex justify-center'>
                    <UserInput />
                </div>
                <div className='flex justify-evenly mt-5 text-center gap-2 mx-5'>
                    <UserCount />
                </div>
                <div className='p-4 bg-orange-600 text-center mb-4 text-white mx-5 hover:bg-orange-700 cursor-pointer'>
                    <button>Submit</button>
                </div>
                <div className='text-center pb-4'>
                    <p>By submitting this form, I agree to Profit.co's <a className='text-[#1fade4]' href="#">Privacy Policy.</a> </p>
                </div>
            </div>
            <div className='text-center py-8 bg-[#f5f8fd] mt-5'>
                <h2 className='text-4xl font-bold'>Contact Us Now</h2>
                <div className='flex justify-center gap-10 mt-8'>
                    <div>
                        <a href="+8801900000000">
                            <MdCall className='text-5xl text-[#2196f3]' />
                            <h3 className='text-2xl'>Call</h3>
                        </a>
                    </div>
                    <div>
                        <a href="info@topgareperporm.com">
                            <MdEmail className='text-5xl text-[#2196f3]' />
                            <h3 className='text-2xl'>Call</h3>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScheduleDemo;