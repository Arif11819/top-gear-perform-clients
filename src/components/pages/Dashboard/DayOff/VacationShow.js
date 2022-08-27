import React from 'react';
import { FaCalendarDay } from 'react-icons/fa'
import { useQuery } from 'react-query';
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { BsCalendarMinus } from 'react-icons/bs'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const VacationShow = () => {
    const [user] = useAuthState(auth);
    const { data: vacationStore, isLoading, refetch } = useQuery('vacationStore', () => fetch(`http://localhost:5000/vacationstore/${user.email}`, {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    return (
        <div className='mx-8 mt-10'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-2 text-lg font-bold'>
                    <FaCalendarDay />
                    <h2>Consumption Days Off</h2>
                </div>
            </div>
            <p className='border border-gray-300 mt-3'></p>
            <div>
                {
                    vacationStore?.map(vacations => <div key={vacations._id}>
                        <p className='border border-gray-300 mt-3'></p>
                        <div className='flex gap-32 p-3'>
                            <div className='flex items-center gap-4'>
                                <BsCalendarMinus className='text-3xl text-[#527a00]' />
                                <div>
                                    <h2>{vacations.from} to {vacations.to}</h2>
                                    <div className='flex items-center gap-2'>
                                        <BsFillCheckCircleFill className='text-green-700' />
                                        <p className='text-slate-600'>{vacations.day} days of {vacations.vacationType}</p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className='text-slate-400'>{vacations.notes}</p>
                            </div>
                        </div>
                        <p className='border border-gray-300 mt-3'></p>
                    </div>)
                }
            </div>
        </div>
    );
};

export default VacationShow;