import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import ScheduleData from '../scheduleData/scheduleData';
const Scheduled = () => {

    const [schedules, setSchedules] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://dry-ravine-83506.herokuapp.com/schedule/${user?.email}`)
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, [schedules]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const scheduleTask = {
            form: data,
            user: user.email
        }
        fetch('https://dry-ravine-83506.herokuapp.com/schedule', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(scheduleTask)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    console.log(data);
                    reset();
                }
            })


    };

    return (
        <div>
            <div className='tasks justify-items-center'>
                {schedules.map(schedule => <ScheduleData key={schedule._id} schedule={schedule}></ScheduleData>)}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className=' mx-auto px-2 py-2 mt-1  relative block  border-slate-500  text-gray-900 rounded-t-md  sm:text-sm' placeholder='Write your Task' type="text" {...register("scheduleTask")} required />
                <input className='btn-link mx-20 font-semibold rounded btn-sm text-green-600 ' value='+ Add Task' type="submit" />
            </form>
        </div>
    );
};

export default Scheduled;