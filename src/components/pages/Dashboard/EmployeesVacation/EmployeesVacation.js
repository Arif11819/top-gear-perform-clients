import React from 'react';
import { useQuery } from 'react-query';
import EmployeesCard from './EmployeesCard';

const EmployeesVacation = () => {
    const { data: vacationstore, isLoading, refetch } = useQuery('vacationstore', () => fetch(`https://dry-ravine-83506.herokuapp.com/vacationstore`, {
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