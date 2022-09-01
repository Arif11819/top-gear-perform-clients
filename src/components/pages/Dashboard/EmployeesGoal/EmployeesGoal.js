import React from 'react';
import { useQuery } from 'react-query';
import EmployeeGoalCard from './EmployeeGoalCard';

const EmployeesGoal = () => {
    const { data: employeesgoal, isLoading, refetch } = useQuery('Employeesgoal', () => fetch(`http://localhost:5000/usergoal`, {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    return (
        <div className='grid grid-cols-3 gap-4 mx-5'>
            {
                employeesgoal?.map(employeegoal => <EmployeeGoalCard key={employeegoal._id} employeegoal={employeegoal} />)
            }
        </div>
    );
};

export default EmployeesGoal;