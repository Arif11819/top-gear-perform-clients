import React, { useEffect, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import './scheduleCalender.css'

const ScheduleCalender = ({ date, setDate, time, setTime }) => {
    const [timeSlots, setTimeSlots] = useState([])
    const handleChange = (e) => {
        setTime(e.target.value)
    }
    useEffect(() => {
        fetch("timeSlots.json")
            .then(res => res.json())
            .then(data => setTimeSlots(data))
    }, [])
    return (
        <div className='flex'>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
            />
            <div className='grid grid-cols-2 gap-2 h-5'>
                {
                    timeSlots.map(timeSlot =>
                        <form>

                            <div>
                                <input className='radio' type="radio" value={timeSlot.time} id={timeSlot.time} checked={time === timeSlot.time} onChange={handleChange} />
                                <label className='lvl m-0' htmlFor={timeSlot.time}>
                                    <div>
                                        <h3>{timeSlot.time}</h3>
                                    </div>
                                </label>
                            </div>

                        </form>
                    )
                }
            </div>
        </div>
    );
};

export default ScheduleCalender;