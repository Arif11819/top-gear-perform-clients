import React from 'react';

const CompleteData = ({ complete }) => {

    const handleDeleteTask = id => {

        const url = `http://localhost:5000/complete/${id}`
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
                <label for="task">{complete.compTask}</label>
                <div className="card-actions mt-3 justify-end">
                    <button className=" btn btn-outline btn-xs">Edit</button>
                    <button onClick={() => handleDeleteTask(complete._id)} className=" btn  btn-error btn-xs text-white rounded-full">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CompleteData;