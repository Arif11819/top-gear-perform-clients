import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CompleteData from '../CompleteData/CompleteData';

const Completed = () => {

    const [completes, setCompletes] = useState([]);
    useEffect(() => {
        fetch('https://dry-ravine-83506.herokuapp.com/complete')
            .then(res => res.json())
            .then(data => setCompletes(data))
    }, [completes]);
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {

        const url = `https://dry-ravine-83506.herokuapp.com/complete`;
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
                {completes.map(complete => <CompleteData key={complete._id} complete={complete}></CompleteData>)}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className=' mx-auto px-2 py-2 mt-1  relative block  border-slate-500  text-gray-900 rounded-t-md  sm:text-sm' placeholder='Write your Task' type="text" {...register("compTask")} />
                <input className='btn-link mx-20 font-semibold rounded btn-sm text-green-600 ' value='+ Add Task' type="submit" />
            </form>
        </div>
    );
};

export default Completed;