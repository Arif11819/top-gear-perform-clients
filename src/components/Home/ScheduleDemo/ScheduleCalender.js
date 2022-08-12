import React from 'react';
import { DayPicker } from 'react-day-picker';
import './scheduleCalender.css'

const ScheduleCalender = ({ date, setDate, time, setTime, timeSlots }) => {

    const handleChange = (e) => {
        setTime(e.target.value)
    }

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
                        <form key={timeSlot.id}>

                            <div>
                                <input className='radio' type="radio" value={timeSlot.time} id={timeSlot.time} checked={time === timeSlot.time} onChange={handleChange} required />
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