import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import ProgressData from '../ProgressData/ProgressData';

const Progress = () => {

    const [progress, setprogress] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://top-gear-perform-server.vercel.app/progress/${user?.email}`)
            .then(res => res.json())
            .then(data => setprogress(data))
    }, [progress]);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const proceedTask = {
            form: data,
            user: user.email
        }
        fetch('https://top-gear-perform-server.vercel.app/progress', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(proceedTask)
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
            <div className='grid grid-cols-1 gap-5 justify-items-center'>
                {progress.map(progres => <ProgressData key={progres._id} progres={progres}></ProgressData>)}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className=' mx-auto w-3/4 px-2 py-2 mt-1  relative block  border-slate-500  text-gray-900 rounded-t-md  sm:text-sm' placeholder='Write your Task' type="text" {...register("proceedTask")} required />
                <input className=' mx-auto w-3/4 px-2 py-2 text-blue-500 mt-1  relative block  border border-gray-300 rounded-t-md  sm:text-sm' type="date"{...register("date")} required />
                <div className='flex justify-center'>   <input className='btn-link mx-20 font-semibold rounded btn-sm text-green-600 ' value='+ Add Task' type="submit" /></div>
            </form>
        </div>
    );
};

export default Progress;