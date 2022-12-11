import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import auth from '../../../firebase.init';
import CompleteData from '../CompleteData/CompleteData';

const Completed = () => {

    const [completes, setCompletes] = useState([]);
    const [user] = useAuthState(auth);
    useEffect(() => {
        fetch(`https://top-gear-perform-server.up.railway.app/complete/${user?.email}`)
            .then(res => res.json())
            .then(data => setCompletes(data))
    }, [completes]);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const compTask = {
            form: data,
            user: user.email
        }
        fetch('https://top-gear-perform-server.up.railway.app/complete', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(compTask)
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
                {completes.map(complete => <CompleteData key={complete._id} complete={complete}></CompleteData>)}
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input className=' mx-auto w-3/4 px-2 py-2 mt-1  relative block  border-slate-500  text-gray-900 rounded-t-md  sm:text-sm' placeholder='Write your Task' type="text" {...register("compTask")} required />
                <input className=' mx-auto w-3/4 px-2 py-2 text-blue-500 mt-1  relative block  border border-gray-300 rounded-t-md  sm:text-sm' type="date"{...register("date")} required />
                <div className='flex justify-center'>  <input className='btn-link mx-20 font-semibold rounded btn-sm text-green-600 ' value='+ Add Task' type="submit" /></div>
            </form>
        </div>
    );
};

export default Completed;