import React, { useEffect, useState } from 'react';

const ProgressData = ({ progres }) => {
    const [progress, setprogress] = useState([]);
    useEffect(() => {
        fetch(`https://dry-ravine-83506.herokuapp.com/progress`)
            .then(res => res.json())
            .then(data => setprogress(data))
    }, [progress]);
    const handleDeleteTask = id => {




        const url = `https://dry-ravine-83506.herokuapp.com/progress/${id}`

        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    const remaining = progress.filter(progres => progres._id !== id);
                    setprogress(remaining)
                }
                console.log(data);
            })
    }
    return (
        <div className="card w-72 bg-slate-50 shadow">
            <div className="card-body text-center items-center">
                <h2 className='text-black'>{progres.proceedTask}</h2>
                <div className="card-actions mt-3 justify-end">
                    <button className=" text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-1 py-1 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Edit</button>
                    <button onClick={() => handleDeleteTask(progres._id)} className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ProgressData;