import React from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'

const HrCloud = () => {
    return (
        <div>
            <div className='border border-stone-300 border-t-orange-300 border-t-2'>
                <div className='bg-white p-8'>
                    <h1 className='text-3xl'>HR Cloud</h1>
                    <p className='my-4 max-w-300'>Award-winning HR software built to help you easily scale from 2 to 2,000+ employees.</p>
                    <a className='border-b-2 border-b-orange-300' href="#">Learn more</a>
                </div>
                <div>
                    <div className='flex'>
                        <AiOutlineDollarCircle className='bg-green-600 color-white text-white' />
                        <h3>Payroll</h3>
                        <IoIosArrowForward />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HrCloud;