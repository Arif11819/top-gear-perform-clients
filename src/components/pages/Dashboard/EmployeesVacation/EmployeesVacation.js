import React from 'react';
import { useQuery } from 'react-query';
import EmployeesCard from './EmployeesCard';

const EmployeesVacation = () => {
    const { data: vacationstore, isLoading, refetch } = useQuery('vacationstore', () => fetch(`http://localhost:5000/vacationstore`, {
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