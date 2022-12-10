import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';

const MyTaskData = ({ task }) => {

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch(`https://top-gear-perform-server.vercel.app/task/${user?.email}`)
            .then(res => res.json())
            .then(data => setTasks(data))
    }, [tasks]);
    const [user] = useAuthState(auth);
    const { data: myTask, isLoading, refetch } = useQuery('myTask', () => fetch(`https://top-gear-perform-server.vercel.app/task/${user?.email}`, {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <p>Loading...</p>
    }


    const handleDeleteTask = id => {

        const url = `https://top-gear-perform-server.vercel.app/task/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    const remaining = tasks.filter(task => task._id !== id);
                    setTasks(remaining)
                }
                console.log(data);
            })
    }

    return (
        <div className="card w-72 bg-slate-50 shadow">
            <div className="card-body text-center items-center">
                <h2 className='text-black'>{task.form.myTask}</h2>
                <h2 className='text-blue-500 text-xs'>{task.form.date}</h2>

                <div className="card-actions mt-10 mb-0  justify-end">

                    <button onClick={() => handleDeleteTask(task._id)} className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default MyTaskData;