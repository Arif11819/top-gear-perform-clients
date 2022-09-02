import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ScheduleDemoDetails = () => {
    const [scheduleUsers, setScheduleUsers] = useState([]);
    useEffect(() => {
        fetch(`https://dry-ravine-83506.herokuapp.com/scheduleUser`)
            .then(res => res.json())
            .then(data => setScheduleUsers(data))
    }, [scheduleUsers]);

    const handleCancelSchedule = id => {

        const url = `https://dry-ravine-83506.herokuapp.com/scheduleUser/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    const remaining = scheduleUsers.filter(scheduleUser => scheduleUser._id !== id);
                    setScheduleUsers(remaining)
                }
                toast.error('Successfully Deleted  ')
                console.log(data);

            })
    }


    return (
        <div>
            <h1 className='text-4xl mb-12 mt-10 text-center font-bold text-black'>Manage Our Scheduled User Details</h1>
            <table className="table mx-auto">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Company</th>
                        <th>Date</th>
                        <th>Time</th>
                        <th>TimeZone</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Cancel</th>

                    </tr>
                </thead>
                <tbody>

                    {scheduleUsers.map(scheduleUser => <tr key={scheduleUser._id}>
                        <td>{scheduleUser.userName
                        }</td>
                        <td>{scheduleUser.company}</td>
                        <td>{scheduleUser.date}</td>
                        <td>{scheduleUser.time}</td>
                        <td>{scheduleUser.timeZone}</td>
                        <td>{scheduleUser.email}</td>
                        <td>{scheduleUser.phone}</td>

                        <td><button onClick={() => handleCancelSchedule(scheduleUser._id)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-1 text-center'>Cancel</button></td>

                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleDemoDetails;