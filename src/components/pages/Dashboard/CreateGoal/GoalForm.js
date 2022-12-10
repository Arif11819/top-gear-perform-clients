import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BsCheckLg } from 'react-icons/bs'
import { toast } from 'react-toastify';
import { useForm } from "react-hook-form";
import auth from '../../../../firebase.init';

const GoalForm = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        const goalData = {
            form: data,
            user: user.email
        }
        fetch('https://top-gear-perform-server.vercel.app/usergoal', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(goalData)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    toast.success("Successfully create your goal, scroll down and show this")
                    reset()
                }
            })


    };
    return (
        <div>
            <div className='text-center mt-5'>
                <div className='flex justify-center mb-2 text-green-600 text-4xl'>
                    <BsCheckLg />
                </div>
                <h2 className='uppercase text-2xl font-bold my-2'>create goal</h2>
                <p>Fill out this form to create a goal</p>
            </div>
            <div className='flex justify-center mt-10'>
                <div className='w-2/5'>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div>
                            <label className='uppercase font-bold text-sm' htmlFor="goalname">Goal name</label> <br />
                            <input className='w-full p-2 border border-slate-500 rounded-sm' type="text" name="goalname" placeholder='Write goal name' required {...register("goalName")} />
                        </div>
                        <div className='md:grid grid-cols-2 justify-center gap-10 my-6'>
                            <div>
                                <label className='uppercase text-sm font-bold' htmlFor="target">target</label> <br />
                                <select {...register("target")} className='w-full p-2 border border-slate-500 rounded-sm bg-white' name="target">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                    <option value="6">6</option>
                                    <option value="7">7</option>
                                    <option value="8">8</option>
                                    <option value="9">9</option>
                                    <option value="10">10</option>
                                </select>
                            </div>
                            <div>
                                <label className='uppercase text-sm font-bold' htmlFor="unit">units</label> <br />
                                <select {...register("unit")} className='w-full p-2 border border-slate-500 rounded-sm bg-white' name="unit" >
                                    <option value="Development Sprints">Development Sprints</option>
                                    <option value="Technology Integration">Technology Integration</option>
                                </select>
                            </div>
                        </div>
                        <div className='md:grid grid-cols-2 justify-center gap-10 my-6'>
                            <div>
                                <label className='uppercase text-sm font-bold' htmlFor="start">Start Date</label> <br />
                                <input className=' p-2 border w-full border-slate-500 rounded-sm' type="date" name="start" {...register("from")} />
                            </div>
                            <div>
                                <label className='uppercase text-sm font-bold' htmlFor="end">End Date</label> <br />
                                <input className='p-2 border w-full border-slate-500 rounded-sm' type="date" name="end" {...register("to")} />
                            </div>
                        </div>
                        <div>
                            <label className='uppercase text-sm font-bold' htmlFor="goald">goal description</label> <br />
                            <textarea className='border p-2 border-slate-500 rounded-sm w-full' name="goald" cols="56" rows="10" placeholder='Write here...' {...register("goalDes")}></textarea>
                        </div>
                        <div className='mt-4'>
                            <label className='uppercase font-bold text-sm' htmlFor="goalc">Goal category</label> <br />
                            <select {...register("goalCat")} className='w-full p-2 border border-slate-500 rounded-sm bg-white' name="goalc">
                                <option value="Productivity goals">Productivity goals</option>
                                <option value="Efficiency goals">Efficiency goals</option>
                                <option value="Education goals">Education goals</option>
                                <option value="Communication goals">Communication goals</option>
                                <option value="Leadership goals">Leadership goals</option>
                                <option value="Time management goals">Time management goals</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className='flex justify-center my-5'>
                            <input type="submit" value='Create One' className='p-2 font-bold bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-700  cursor-pointer' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default GoalForm;