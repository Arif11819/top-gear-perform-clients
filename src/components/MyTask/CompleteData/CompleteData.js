import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../firebase.init';

const CompleteData = ({ complete }) => {
    const [completes, setCompletes] = useState([]);
    useEffect(() => {
        fetch(`https://top-gear-perform-server.vercel.app/complete/${user?.email}`)
            .then(res => res.json())
            .then(data => setCompletes(data))
    }, [completes]);
    const [user] = useAuthState(auth);
    const { data: compTask, isLoading, refetch } = useQuery('compTask', () => fetch(`https://top-gear-perform-server.vercel.app/complete/${user?.email}`, {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <p>Loading...</p>
    }

    const handleDeleteTask = id => {

        const url = `https://top-gear-perform-server.vercel.app/complete/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    const remaining = completes.filter(complete => complete._id !== id);
                    setCompletes(remaining)
                }
                console.log(data);

            })
    }
    return (
        <div className="card w-72  bg-slate-50 shadow">
            <div className="card-body text-center items-center">
                <h2 className='text-black'>{complete.form.compTask}</h2>
                <h2 className='text-blue-500 text-xs'>{complete.form.date}</h2>
                <div className="card-actions mt-10 mb-0  justify-end">

                    <button onClick={() => handleDeleteTask(complete._id)} className=" text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-1 text-center">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default CompleteData;