import React, { useEffect, useState } from 'react';
import ScheduleCalender from './ScheduleCalender';
import './ScheduleDemo.css'
import ScheduleOption from './ScheduleOption';
import { format } from 'date-fns';
import UserInput from './UserInput';
import UserCount from './UserCount';
import { MdCall } from 'react-icons/md'
import { MdEmail } from 'react-icons/md'
import { useNavigate } from 'react-router-dom';
import ScheduleSubmit from './ScheduleSubmit';

const ScheduleDemo = () => {
    const navigate = useNavigate();
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState('');
    const [timeSlots, setTimeSlots] = useState([]);
    const [timeZone, setTimeZone] = useState('+06:00')
    const [languageSelect, setLanguageSelect] = useState('English')
    const [userCount, setUserCount] = useState('1-50');
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [companyName, setCompanyName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [bookedTime, setBookedTime] = useState('');
    useEffect(() => {
        fetch("https://dry-ravine-83506.herokuapp.com/timeSlots")
            .then(res => res.json())
            .then(data => setTimeSlots(data))
    }, [])
    const formattedDate = format(date, 'PP');
    const handleSubmit = () => {
        const scheduleData = {
            timeZone: timeZone,
            language: languageSelect,
            date: formattedDate,
            time: time,
            userName: userName,
            email: email,
            company: companyName,
            phone: phoneNumber,
            userCount: userCount
        }
        fetch("https://dry-ravine-83506.herokuapp.com/scheduleData", {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(scheduleData)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success === true) {
                    navigate('/scheduleSubmit')
                } else {
                    setBookedTime('Your selected time is already booked,Try another time')

                }
            })
    }
    return (
        <div>
            <div className='text-center my-10'>
                <h2 className='text-3xl font-bold'>Schedule Demo</h2>
                <p className='text-blue-700 font-medium mt-2'>Request a free, personalized demo today</p>
            </div>
            <div className='md:w-2/5 mx-auto bg-white rounded shadow-lg pt-4'>
                <div>
                    <ScheduleOption setTimeZone={setTimeZone} setLanguageSelect={setLanguageSelect} />

                </div>
                <p className='ml-3 my-4 text-black'>Date</p>
                <div className='p-4'>
                    <ScheduleCalender bookedTime={bookedTime} date={date} setDate={setDate} time={time} setTime={setTime} timeSlots={timeSlots} setTimeSlots={setTimeSlots} />
                    <p className='text-red-600 font-bold text-center'>{bookedTime}</p>
                    <p className='bg-[#cbe2f7] p-3 font-bold text-sm'>Selected Date: {format(date, 'PPPP')} {time}</p>
                </div>
                <div className='flex justify-center'>
                    <UserInput setUserName={setUserName} setEmail={setEmail} setCompanyName={setCompanyName} setPhoneNumber={setPhoneNumber} />
                </div>
                <div className='flex justify-evenly mt-5 text-center gap-2 mx-5'>
                    <UserCount userCount={userCount} setUserCount={setUserCount} />
                </div>
                <div onClick={handleSubmit} className='p-4 bg-orange-600 text-center mb-4 text-white mx-5 hover:bg-orange-700 cursor-pointer'>
                    <button>Submit</button>
                </div>
                <div className='text-center pb-4'>
                    <p>By submitting this form, I agree to topgearperform's <a className='text-[#1fade4]' href="#">Privacy Policy.</a> </p>
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
            <div className='hidden'>
                <ScheduleSubmit timeZone={timeZone} date={date} />
            </div>
        </div>
    );
};

export default ScheduleDemo;