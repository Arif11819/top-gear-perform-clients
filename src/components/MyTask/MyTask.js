import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import CompleteData from './CompleteData/CompleteData';
import './MyTask.css'
import MyTaskData from './MyTaskData/MyTaskData';
import ProgressData from './ProgressData/ProgressData';
import Scheduled from './Scheduled/Scheduled';
import ScheduleData from './scheduleData/scheduleData';
const MyTask = () => {

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/task')
            .then(res => res.json())
            .then(data => setTasks(data))
    }, []);
    const [schedules, setSchedules] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/schedule')
            .then(res => res.json())
            .then(data => setSchedules(data))
    }, []);
    const [proceeds, setProceeds] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/progress')
            .then(res => res.json())
            .then(data => setProceeds(data))
    }, []);
    const [completes, setCompletes] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/complete')
            .then(res => res.json())
            .then(data => setCompletes(data))
    }, []);

    const { register, handleSubmit, reset } = useForm();
    const onSubmitProgress = data => {

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

    const onSubmitSchedule = data => {

        const url = `http://localhost:5000/schedule`;
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

    const onSubmitComplete = data => {

        const url = `http://localhost:5000/complete`;
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

    const onSubmit = data => {

        const url = `http://localhost:5000/task`;
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
        <section className='bg-slate-50'>
            <h1 className='text-4xl mb-4 mt-4 text-center font-bold text-slate-900'>My Task Center</h1>
            <div className='my-task'>
                <div><h4 className="font-medium leading-tight text-center text-2xl mt-0 mb-2 text-black-600">Not Started</h4>
                    <div className='tasks justify-items-center'>
                        {tasks.map(task => <MyTaskData key={task._id} task={task}></MyTaskData>)}
                    </div>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className=' mx-auto px-2 py-2 mt-1  relative block  border-slate-500  text-gray-900 rounded-t-md  sm:text-sm' placeholder='Write your Task' type="text" {...register("myTask")} />
                        <input className='btn-link mx-20 font-semibold rounded btn-sm text-green-600 ' value='+ Add Task' type="submit" />
                    </form>
                </div>
                <div><h4 className="font-medium leading-tight text-center text-2xl mt-0 mb-2 text-black-600">Scheduled</h4>
                    <Scheduled />
                </div>
                <div><h4 className="font-medium leading-tight text-center text-2xl mt-0 mb-2 text-black-600">In Progress </h4>

                    <div className='tasks justify-items-center'>
                        {tasks.map(task => <MyTaskData key={task._id} task={task}></MyTaskData>)}
                    </div>
                    <form onSubmit={handleSubmit(onSubmitProgress)}>
                        <input className=' mx-auto px-2 py-2 mt-1  relative block  border-slate-500  text-gray-900 rounded-t-md  sm:text-sm' placeholder='Write your Task' type="text" {...register("proceedTask")} />
                        <input className='btn-link mx-20 font-semibold rounded btn-sm text-green-600 ' value='+ Add Task' type="submit" />
                    </form>
                </div>
                <div><h4 className="font-medium leading-tight text-center text-2xl mt-0 mb-2 text-black-600">Completed</h4>
                    <div className='tasks justify-items-center'>
                        {tasks.map(task => <MyTaskData key={task._id} task={task}></MyTaskData>)}
                    </div>
                    <form onSubmit={handleSubmit(onSubmitComplete)}>
                        <input className=' mx-auto px-2 py-2 mt-1  relative block  border-slate-500  text-gray-900 rounded-t-md  sm:text-sm' placeholder='Write your Task' type="text" {...register("compTask")} />
                        <input className='btn-link mx-20 font-semibold rounded btn-sm text-green-600 ' value='+ Add Task' type="submit" />
                    </form>
                </div>



            </div>
        </section>
    );
};

export default MyTask;