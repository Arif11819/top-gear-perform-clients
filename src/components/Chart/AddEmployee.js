import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoPeopleCircleSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import './addemployee.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const AddEmployee = () => {
    const [user] = useAuthState(auth);
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const empoloyeeData = {
            form: data,
            user: user.email
        }
        const url = `https://dry-ravine-83506.herokuapp.com/employee`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(empoloyeeData)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
                toast.success("New Employee has been added!!")
            })
        navigate('/dashboard/employee');
    };
    return (
        <div className='pb-20 add-employee justify-items-center flex flex-col'>
            <h1 className='mb-5 justify-center flex items-center mt-10 text-lg pl-20 text-blue-600 font-bold'> <IoPeopleCircleSharp className='text-2xl'></IoPeopleCircleSharp><p className='pl-1 text-md'>New Employee</p></h1>
            <form className='flex flex-col pl-20 mb-10 ' onSubmit={handleSubmit(onSubmit)}>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Employee Name *</span>
                    <input
                        type="text"
                        placeholder="Type Employee Name"
                        className="input-width rounded-xl  input-bordered"
                        required
                        {...register("name")}
                    />
                </label>
                <label className='flex flex-col justify-start items-start'>
                    <span className='my-3'>Role *</span>
                    <select
                        className="input-width rounded-xl input-bordered "
                        placeholder='Select Role'
                        required
                        {...register("role")}
                    >
                        <option value="Technology Officer">Technology Officer</option>
                        <option value="Executive Assistants">Executive Assistants</option>
                        <option value="Marketing manager">Marketing manager</option>
                        <option value="Product manager">Product manager</option>
                        <option value="Project manager">Project manager</option>
                        <option value="Finance manager">Finance manager</option>
                        <option value="Project analyst">Project analyst</option>
                        <option value="Marketing specialist">Marketing specialist</option>
                        <option value="Business analyst">Business analyst</option>
                        <option value="Sales representative">Sales representative</option>
                        <option value="Safety Manager">Safety Manager</option>
                    </select>
                </label>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Employee Profile Image *</span>
                    <input
                        placeholder="Provide Employee Profile Image Link"
                        className="input-width rounded-xl input-bordered "
                        required
                        {...register("image")}
                    />
                </label>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Address *</span>
                    <input
                        placeholder="Type Employee Address"
                        className="input-width rounded-xl input-bordered "
                        required
                        {...register("address")}
                    />
                </label>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Email *</span>
                    <input
                        type='email'
                        placeholder="Type Employee Email"
                        className="input-width rounded-xl input-bordered "
                        required
                        {...register("email")}
                    />
                </label>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Contact Number *</span>
                    <input
                        // type='number'
                        placeholder="Provide Employee Contact Number"
                        className="input-width rounded-xl input-bordered "
                        required
                        {...register("contact1")}
                    />
                </label>



                <div className='flex justify-center mb-4'> <input className='text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  font-bold rounded-xl text-sm px-7 w-44 py-3 hover:text-white hover:bg-blue-700 text-center' type="submit" value="Add New Employee" /></div>
                <ToastContainer className="w-20 ml-48 pt-4" />
            </form>
        </div>
    );
};

export default AddEmployee;