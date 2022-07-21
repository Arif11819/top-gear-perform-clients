import React from 'react';
import EmployeesCard from './EmployeesCard';
import { FcRight } from 'react-icons/fc'

const Employees = () => {
    return (
        <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            <div className='container mx-auto'>
                <div className='p-10'>
                    <h2 className='text-center text-4xl font-bold'>Loved By HR, Managers And Employees</h2>
                </div>
                <div className='my-8'>
                    <EmployeesCard />
                </div>
                <div className='flex justify-center items-center pb-4'>
                    <a className='text-2xl font-bold text-white' href="#">More From Our Customers </a>
                    <FcRight className='text-2xl mt-1 ml-3 font-bold' />
                </div>
            </div>
        </div>
    );
};

export default Employees;