import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { MdDelete } from 'react-icons/md'
import auth from '../../../../firebase.init';


const GoalShow = () => {
    const [user] = useAuthState(auth);
    const { data: goalData, isLoading, refetch } = useQuery('goalData', () => fetch(`https://dry-ravine-83506.herokuapp.com/usergoal/${user?.email}`, {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <p>Loading...</p>
    }
    const handleDelete = (id) => {
        const url = `https://dry-ravine-83506.herokuapp.com/goal/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                refetch()
            })
    }
    return (
        <div>
            <div>

                <h2 className='text-gray-600 p-2 bg-slate-200 text-lg font-bold pl-4'> Show Your Created Goal</h2>

            </div>
            <div className='grid grid-cols-4 gap-3 my-10 mx-5'>
                {
                    goalData?.map(goal => <div key={goal._id}>
                        <div className='bg-sky-100 p-4 border-b-2 border-r-2 border-blue-400 shadow-lg shadow-blue-200 rounded-md'>
                            <div className='flex justify-end mb-2'>

                                <button onClick={() => handleDelete(goal._id)}>
                                    <MdDelete className='text-red-700 text-xl' />
                                </button>
                            </div>
                            <p className='text-xl font-bold text-center mb-2 border border-blue-400 p-2 rounded-md'>{goal.form.goalName}</p>
                            <h2 className='font-bold'>Category: {goal.form.goalCat}</h2>
                            <h2 className='font-bold text-sm my-2'>Units: {goal.form.unit}</h2>
                            <h2 className='font-bold'>Target: {goal.form.target}</h2>
                            <div className='flex justify-start gap-3 my-3'>
                                <p>From:</p>
                                <p className='font-bold'>{goal.form.from},</p>
                                <p>To:</p>
                                <p className='font-bold'>{goal.form.to}</p>
                            </div>
                            <p>Description: <span className='text-slate-500'>{goal.form.goalDes}</span></p>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default GoalShow;