import React from 'react';
import { useQuery } from 'react-query';
import EmployeesCard from './EmployeesCard';

const EmployeesVacation = () => {
    const { data: vacationstore, isLoading, refetch } = useQuery('vacationstore', () => fetch(`https://top-gear-perform-server.vercel.app/vacationstore`, {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()


    return (
        <div className='mx-10'>
            {
                vacationstore?.map(vacation => <EmployeesCard key={vacation._id} vacation={vacation} />)
            }
        </div>
    );
};

export default EmployeesVacation;