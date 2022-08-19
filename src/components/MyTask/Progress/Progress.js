import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import ProgressData from '../ProgressData/ProgressData';

const Progress = () => {

    const [progress, setprogress] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/progress')
            .then(res => res.json())
            .then(data => setprogress(data))
    }, [progress]);

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const url = `http://localhost:5000/progress`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                reset()
            })

    };


    return (
        <div>
            <div className='tasks justify-items-center'>
                {progress.map(progres => <ProgressData key={progres._id} progres={progres}></ProgressData>)}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className=' mx-auto px-2 py-2 mt-1  relative block  border-slate-500  text-gray-900 rounded-t-md  sm:text-sm' placeholder='Write your Task' type="text" {...register("proceedTask")} />
                <input className='btn-link mx-20 font-semibold rounded btn-sm text-green-600 ' value='+ Add Task' type="submit" />
            </form>
        </div>
    );
};

export default Progress;