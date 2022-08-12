import React from 'react';

const ScheduleData = ({ schedule }) => {



    const handleDeleteTask = id => {

        const url = `http://localhost:5000/schedule/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);

            })
    }
    return (
        <div className="card w-72 bg-base-100 shadow">
            <div className="card-body text-center items-center">
                <h2 className='text-black'>{schedule.scheduleTask}</h2>
                <div className="card-actions mt-3 justify-end">
                    <button className=" btn btn-outline btn-xs">Edit</button>
                    <button onClick={() => handleDeleteTask(schedule._id)} className=" btn  btn-error btn-xs text-white rounded-full">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ScheduleData;