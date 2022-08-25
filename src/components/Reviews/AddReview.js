import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();
    // const navigate = useNavigate();
    const onSubmit = data => {
        const url = `http://localhost:5000/reviews`;
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
                toast.success("Thank You Sir For Adding New Review!!")
            })
        // navigate('/reviews');
    };
    return (
        <div className=''>
            <form className='flex flex-col mb-10' onSubmit={handleSubmit(onSubmit)}>
                <div className='flex justify-center items-center'>
                    <label className="flex flex-col justify-start items-start">
                        <span className="font-bold my-2">Name *</span>
                        <input
                            type="text"
                            placeholder="Type Name"
                            className="input input-bordered w-96"
                            required
                            {...register("name")}
                        />
                    </label>
                    <label className="flex flex-col justify-start items-start">
                        <span className="font-bold my-2">Profile Image *</span>
                        <input
                            placeholder="Image Link"
                            className="input input-bordered w-96"
                            required
                            {...register("img")}
                        />
                    </label>
                </div>
                <div className='flex justify-center items-center'>
                    <label className="flex flex-col justify-start items-start">
                        <span className="font-bold my-2">Review *</span>
                        <input
                            type='text'
                            placeholder="Type Review"
                            className="input input-bordered w-96"
                            required
                            {...register("feedback")}
                        />
                    </label>
                    <label className="flex flex-col justify-start items-start">
                        <span className="font-bold my-2">Full Review *</span>
                        <input
                            type='text'
                            placeholder="Type Full Review"
                            className="input input-bordered w-96"
                            required
                            {...register("review")}
                        />
                    </label>
                </div>
                <div className='flex justify-center items-center'>
                    <label className="flex flex-col justify-start items-start">
                        <span className="font-bold my-2">Full Review Heading *</span>
                        <input
                            type='text'
                            placeholder="Full Review Heading"
                            className="input input-bordered w-96"
                            required
                            {...register("heading")}
                        />
                    </label>
                    <label className="flex flex-col justify-start items-start">
                        <span className="font-bold my-2">Description *</span>
                        <input
                            type='text'
                            placeholder="Type Description"
                            className="input input-bordered w-96"
                            required
                            {...register("description")}
                        />
                    </label>
                </div>
                <div className='flex flex-col justify-center pb-8 pl-[61px]'>
                    <label className="flex flex-col justify-start items-start">
                        <span className="font-bold my-2">Rating *</span>
                        <input
                            type='number'
                            placeholder="Give Rating"
                            className="input input-bordered w-96"
                            required
                            {...register("rating")}
                        />
                    </label>
                    <input className='btn btn-danger bg-white w-28 ml-3 mt-2' type="submit" value="Save" />
                </div>
                <ToastContainer className="w-20 ml-48 pt-4" />
            </form>
        </div>
    );
};

export default AddReview;