import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { BsPhoneVibrate, BsPhone, BsPeople } from "react-icons/bs";
import { RiOrganizationChart } from "react-icons/ri";
import useEmployee from '../../hooks/useEmployee';




const Chart = ({ ch }) => {
    const { name, image, role, address, email, contact1, contact2, reportsto, reports } = ch;
    const [employee, setEmployee] = useEmployee();

    const handleDelete = id => {

        const url = `https://dry-ravine-83506.herokuapp.com/employee/${id}`;
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                const remainingEmployee = employee.filter(em => em._id !== id);
                setEmployee(remainingEmployee);
            })

    }

    return (
        <div className='mt-10'>
            <div className='flex shadow items-start justify-start gap-8 p-6 bg-slate-100'>
                <div className='flex gap-10'>
                    <div className="avatar mt-2">
                        <div className="w-16 h-16 mx-auto rounded-full ring ring-primary">
                            <img src={image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className='font-bold text-blue-600'>{name}</h2>
                        <p className='text-sm'>{role}</p>
                        <p className='text-sm'>{address}</p>
                    </div>
                </div>
                <div className='mx-auto'>
                    <h1 className='flex items-center gap-1'><AiOutlineMail></AiOutlineMail><p className='text-sm'>{email}</p></h1>
                    <h1 className='flex items-center gap-1'><BsPhoneVibrate></BsPhoneVibrate><p className='text-sm'>{contact1}</p></h1>
                    <h1 className='flex items-center gap-1'><BsPhone></BsPhone><p className='text-sm'>{contact2}</p></h1>
                </div>

                <button onClick={() => handleDelete(ch._id)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-4 py-3 text-center'>Remove User</button>
            </div>

        </div>
    );
};

export default Chart;