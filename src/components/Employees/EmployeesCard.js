import React from 'react';
import { employees } from './Data';

const EmployeesCard = () => {
    return (
        <div className='container'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-10 mx-5'>
                {
                    employees.map((employee, index) => {
                        return (
                            <div key={index} className="p-8  shadow-lg rounded-2xl bg-white max-w-6xl">
                                <div className='md:flex items-center' data-aos="zoom-in" data-aos-duration="2000">
                                    <img className='w-20 h-20 rounded-full mr-4 mb-5 md:mb-0 lg:mb-0' src={employee.img} alt="" />

                                    <div className=''>
                                        <div className='flex'>
                                            <span className='text-4xl font-bold italic text-red-400 mr-2 mt-[-5px]'>"</span>
                                            <h2 className='italic text-lg'>{employee.comment}</h2>
                                        </div>
                                        <p className='text-lg font-bold ml-6'>{employee.name}</p>
                                        <p className='text-slate-500 ml-6'>{employee.position}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
};

export default EmployeesCard;