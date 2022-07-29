import React from 'react';
import EmployeesCard from './EmployeesCard';
import { FcRight } from 'react-icons/fc'

const Employees = () => {
    return (
        <div className=''>
            <div className='container mx-auto'>
                <div className='p-10'>
                    <h2 className='text-center text-white lg:text-5xl text-2xl font-bold'>Loved By HR, Managers And Employees</h2>
                </div>
                <div className='lg:my-8'>
                    <EmployeesCard />
                </div>
                <div className='flex justify-center items-center lg:pb-4'>
                    <a className='lg:text-2xl text-1xl font-bold text-white' href="/">More From Our Customers </a>
                    <FcRight className='text-2xl mt-1 ml-3 font-bold' />
                </div>
            </div>
        </div>
    );
};

export default Employees;