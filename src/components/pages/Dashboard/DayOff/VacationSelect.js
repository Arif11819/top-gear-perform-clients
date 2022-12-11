import React, { useState } from 'react';
import { FaUserClock } from 'react-icons/fa'
import { useAuthState } from 'react-firebase-hooks/auth';
import DayOffModal from './DayOffModal';
import VacationCard from './VacationCard';
import { useQuery } from 'react-query'
import auth from '../../../../firebase.init';

const VacationSelect = () => {
    const [user, loading, error] = useAuthState(auth);
    const [openModal, setOpenModal] = useState(null);
    const { data: vacations, isLoading, refetch } = useQuery('vacation', () => fetch(`https://top-gear-perform-server.up.railway.app/vacation/${user?.email}`, {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    return (
        <div className='mx-8 pt-4'>
            <div className='flex justify-between items-center font-bold'>
                <div className='flex items-center gap-2 text-2xl text-[#527a00]'>
                    <FaUserClock />
                    <h2>Days Off</h2>
                </div>
                <div>
                    <p>Accrual Level Start Date: <span className='text-blue-500'>08/20/2022</span> </p>
                </div>
            </div>
            <p className='border border-gray-300 mt-3'></p>
            <div className='flex items-center gap-6 mt-8 ml-4'>
                {
                    vacations?.map(vacation => <VacationCard key={vacation._id} vacation={vacation} setOpenModal={setOpenModal} />)
                }
            </div>
            {
                openModal && <DayOffModal openModal={openModal} vacations={vacations} setOpenModal={setOpenModal} />
            }
        </div>
    );
};

export default VacationSelect;