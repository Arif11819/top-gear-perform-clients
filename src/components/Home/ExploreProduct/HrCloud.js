import React from 'react';
import { AiOutlineDollarCircle } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { AiTwotoneHeart } from 'react-icons/ai'
import { BsClockHistory } from 'react-icons/bs'
import { GiGraduateCap } from 'react-icons/gi'
import { MdOutlinePersonSearch } from 'react-icons/md'
import { HiOutlineUserGroup } from 'react-icons/hi'

const HrCloud = () => {
    return (
        <div>
            <div className='border border-stone-300 border-t-orange-300 border-t-2'>
                <div className='bg-white p-8'>
                    <h1 className='text-3xl'>HR Cloud</h1>
                    <p className='my-4 max-w-300'>Award-winning HR software built to help you easily scale from 2 to 2,000+ employees.</p>
                    <a className='border-b-2 border-b-orange-300' href="#">Learn more</a>
                </div>
                <div className='grid grid-cols-2'>
                    <a href="#">
                        <div className='flex justify-between items-center border p-5 hover:bg-[#ecebe9] cursor-pointer'>
                            <div className='flex items-center gap-3 p-4'>
                                <AiOutlineDollarCircle className='bg-[#F4731E] color-white text-4xl text-white p-2 rounded-md' />
                                <h3>Payroll</h3>
                            </div>
                            <IoIosArrowForward />
                        </div>
                    </a>
                    <a href="#">
                        <div className='flex justify-between items-center border p-5 hover:bg-[#ecebe9] cursor-pointer'>
                            <div className='flex items-center gap-3 p-4'>
                                <AiTwotoneHeart className='bg-[#F4731E] color-white text-4xl text-white p-2 rounded-md' />
                                <h3>Benefits</h3>
                            </div>
                            <IoIosArrowForward />
                        </div>
                    </a>
                </div>
                <div className='grid grid-cols-2'>
                    <a href="#">
                        <div className='flex justify-between items-center border p-5 hover:bg-[#ecebe9] cursor-pointer'>
                            <div className='flex items-center gap-3 p-4'>
                                <BsClockHistory className='bg-[#F4731E] color-white text-4xl text-white p-2 rounded-md' />
                                <h3>Time And Attendence</h3>
                            </div>
                            <IoIosArrowForward />
                        </div>
                    </a>
                    <a href="#">
                        <div className='flex justify-between items-center border p-5 hover:bg-[#ecebe9] cursor-pointer'>
                            <div className='flex items-center gap-3 p-4'>
                                <GiGraduateCap className='bg-[#F4731E] color-white text-4xl text-white p-2 rounded-md' />
                                <h3>Learning Managment</h3>
                            </div>
                            <IoIosArrowForward />
                        </div>
                    </a>
                </div>
                <div className='grid grid-cols-2'>
                    <a href="#">
                        <div className='flex justify-between items-center border p-5 hover:bg-[#ecebe9] cursor-pointer'>
                            <div className='flex items-center gap-3 p-4'>
                                <MdOutlinePersonSearch className='bg-[#F4731E] color-white text-4xl text-white p-2 rounded-md' />
                                <h3>Talent Managment</h3>
                            </div>
                            <IoIosArrowForward />
                        </div>
                    </a>
                    <a href="#">
                        <div className='flex justify-between items-center border p-5 hover:bg-[#ecebe9] cursor-pointer'>
                            <div className='flex items-center gap-3 p-4'>
                                <HiOutlineUserGroup className='bg-[#F4731E] color-white text-4xl text-white p-2 rounded-md' />
                                <h3>PEO Services</h3>
                            </div>
                            <IoIosArrowForward />
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default HrCloud;