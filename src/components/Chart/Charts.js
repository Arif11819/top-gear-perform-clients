import React from 'react';
import useEmployee from '../../hooks/useEmployee';
import Chart from './Chart';
import { FaAddressBook } from "react-icons/fa";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { BsArrowUpRightCircleFill, BsList } from "react-icons/bs";
import { RiOrganizationChart } from "react-icons/ri";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Charts = () => {
    const [employee] = useEmployee();
    const navigate = useNavigate();
    const handleNewEmployee = () => {
        navigate('/dashboard/add-employee');
    }
    return (
        <div className='flex flex-col pl-20 pr-20 mt-10 mb-12'>
            <div className='flex items-center justify-between'>
                <div>
                    <h1 className='flex gap-1 items-center font-bold text-2xl text-blue-600'><FaAddressBook></FaAddressBook>Directory<p className='text-black font-normal text-sm pt-1'>[{employee.length}]</p></h1>
                </div>
                <div>
                    <Link to=""><h1 className='flex items-center gap-1 text-sm text-blue-600 font-semibold'><BsArrowUpRightCircleFill></BsArrowUpRightCircleFill><p>Quick access to the directory</p></h1></Link>
                </div>
            </div>
            <div className='flex justify-between mt-4'>
                <div className='text-blue-600 mt-3 text-sm font-bold border-solid border-2 w-36 flex justify-center items-center border-blue-600'>
                    <button onClick={handleNewEmployee} className='flex items-center gap-1'><AiOutlinePlusCircle></AiOutlinePlusCircle>New Employee</button>
                </div>
                <div className='flex items-center gap-10'>
                    <Link className='flex gap-1 items-center font-bold text-md text-blue-600' to=""><BsList></BsList><h1>List</h1></Link>
                    <Link to=""><h1 className='flex gap-1 items-center font-bold text-md text-blue-600'><FaAddressBook></FaAddressBook>Directory</h1></Link>
                    <Link className='flex gap-1 items-center font-bold text-md text-blue-600' to=""><RiOrganizationChart></RiOrganizationChart><h1>Org Chart</h1></Link>
                </div>
            </div>
            {
                employee.map(ch => <Chart
                    key={ch._id}
                    ch={ch}

                >

                </Chart>)
            }
        </div>
    );
};

export default Charts;