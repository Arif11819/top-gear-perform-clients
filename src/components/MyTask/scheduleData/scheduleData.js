import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';

const ScheduleData = ({ schedule }) => {

    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        fetch(`https://top-gear-perform-server.vercel.app/schedule/${user?.email}`)
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, [schedules]);

    const [user] = useAuthState(auth);
    const { data: scheduleTask, isLoading, refetch } = useQuery('scheduleTask', () => fetch(`https://top-gear-perform-server.vercel.app/schedule/${user?.email}`, {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <p>Loading...</p>
    }

    const handleDeleteTask = id => {

        const url = `https://top-gear-perform-server.vercel.app/schedule/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    const remaining = schedules.filter(schedule => schedule._id !== id);
                    setSchedules(remaining)
                }
                console.log(data);

            })
    }
    return (
        <div className="card w-72 bg-slate-50 shadow">
            <div className="card-body text-center items-center">
                <h2 className='text-black'>{schedule.form.scheduleTask}</h2>
                <h2 className='text-blue-500 text-xs'>{schedule.form.date}</h2>
                <div className="card-actions mt-10 mb-0 justify-end">

                    <button onClick={() => handleDeleteTask(schedule._id)} className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ScheduleData;