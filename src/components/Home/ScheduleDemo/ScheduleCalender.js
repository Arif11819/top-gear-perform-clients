import React from 'react';
import { DayPicker } from 'react-day-picker';
import './scheduleCalender.css'

const ScheduleCalender = ({ date, setDate }) => {
    return (
        <div>
            <DayPicker
                mode="single"
                selected={date}
                onSelect={setDate}
            />
        </div>
    );
};

export default ScheduleCalender;