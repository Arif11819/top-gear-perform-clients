import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { IoPeopleCircleSharp } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';

const AddEmployee = () => {
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const onSubmit = data => {
        const url = `https://dry-ravine-83506.herokuapp.com/employee`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                reset();
                toast.success("Thank You Sir For Adding New Employee!!")
            })
        navigate('/employee');
    };
    return (
        <div>
            <h1 className='mb-5 flex items-center mt-10 text-lg pl-20 text-blue-600 font-bold'> <IoPeopleCircleSharp className='text-2xl'></IoPeopleCircleSharp><p className='pl-1 text-md'>New Employee</p></h1>
            <form className='flex flex-col pl-20 mb-10' onSubmit={handleSubmit(onSubmit)}>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Employee Name *</span>
                    <input
                        type="text"
                        placeholder="Type Name"
                        className="input input-bordered w-96"
                        required
                        {...register("name")}
                    />
                </label>
                <label className='flex flex-col justify-start items-start'>
                    <span className='my-3'>Role *</span>
                    <select
                        className="input input-bordered w-96"
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
                        placeholder="Image Link"
                        className="input input-bordered w-96"
                        required
                        {...register("image")}
                    />
                </label>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Address *</span>
                    <input
                        placeholder="Type Address"
                        className="input input-bordered w-96"
                        required
                        {...register("address")}
                    />
                </label>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Email *</span>
                    <input
                        type='email'
                        placeholder="Type Email"
                        className="input input-bordered w-96"
                        required
                        {...register("email")}
                    />
                </label>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Contact1 *</span>
                    <input
                        // type='number'
                        placeholder="Provide Contact"
                        className="input input-bordered w-96"
                        required
                        {...register("contact1")}
                    />
                </label>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Contact2 *</span>
                    <input
                        // type='number'
                        placeholder="Provide Contact"
                        className="input input-bordered w-96"
                        required
                        {...register("contact2")}
                    />
                </label>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Reports To *</span>
                    <input
                        type='text'
                        placeholder="Reports To"
                        className="input input-bordered w-96"
                        required
                        {...register("reportsto")}
                    />
                </label>
                <label className="flex flex-col justify-start items-start">
                    <span className="font-bold my-2">Reports *</span>
                    <input
                        type='number'
                        placeholder="Reprots"
                        className="input input-bordered w-96"
                        required
                        {...register("reports")}
                    />
                </label>
                <input className='btn btn-danger w-28 ml-3 mt-2' type="submit" value="Save" />
                <ToastContainer className="w-20 ml-48 pt-4" />
            </form>
        </div>
    );
};

export default AddEmployee;