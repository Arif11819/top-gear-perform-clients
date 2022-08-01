import React from 'react';
import { AiOutlineAppstoreAdd } from 'react-icons/ai'
import { IoIosArrowForward } from 'react-icons/io'
import { TbDeviceLaptop } from 'react-icons/tb'

const ItCloud = () => {
    return (
        <div>
            <div className='border border-stone-300 border-t-blue-300 border-t-2'>
                <div className='bg-white p-8'>
                    <h1 className='text-3xl'>IT Cloud</h1>
                    <p className='my-4 max-w-300'>Easily set up, secure, and manage your people’s devices and apps—100% remotely.</p>
                    <a className='border-b-2 border-b-orange-300' href="#">Learn more</a>
                </div>
                <div className='grid grid-cols-2'>
                    <a className='border' href="#">
                        <div className='hover:bg-[#ecebe9]'>
                            <div className='flex items-center justify-between p-10'>
                                <AiOutlineAppstoreAdd className='bg-[#F4731E] color-white text-4xl text-white p-2 rounded-md' />
                                <IoIosArrowForward />
                            </div>
                            <div className='px-10 pb-20'>
                                <h2 className='text-xl my-3 mt-0'>App Managment</h2>
                                <div className='text-sm'>
                                    <li>App Provisioning</li>
                                    <li className='my-1'>Single Sign-on</li>
                                    <li>Password Managment</li>
                                    <li className='mt-1'>Multi-Factor Authentication</li>

                                </div>
                            </div>
                        </div>
                    </a>
                    <a className='border' href="#">
                        <div className='hover:bg-[#ecebe9]'>
                            <div className='flex items-center justify-between p-10'>
                                <TbDeviceLaptop className='bg-[#F4731E] color-white text-4xl text-white p-2 rounded-md' />
                                <IoIosArrowForward />
                            </div>
                            <div className='px-10 pb-20'>
                                <h2 className='text-xl my-3 mt-0'>Device Managment</h2>
                                <div className='text-sm'>
                                    <li>Device Setup</li>
                                    <li className='my-1'>Device Security</li>
                                    <li>Device offboarding</li>
                                    <li className='mt-1'>Ordering,shipping & Storage </li>

                                </div>
                            </div>
                        </div>
                    </a>

                </div>
            </div>
        </div>
    );
};

export default ItCloud;