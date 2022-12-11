import React from 'react';
import './PostBlog.css'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
const PostBlog = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const url = `https://top-gear-perform-server.up.railway.app/blog`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result)
                toast.success('A new blog has been added  ')
                reset()
            })

    };
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className='text-4xl mb-8 mt-5  text-center font-bold text-black'>Share a new Blog </h1>
            <div className=' mb-20 mt-5 items-center justify-center'>
                <form className='w-96' onSubmit={handleSubmit(onSubmit)}>
                    <input className='mb-2 appearance-none rounded-none relative block w-full px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' placeholder='Type Blog Title here' type='text' {...register("title")} />

                    <textarea className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' placeholder='Write little description about blog' type="text" {...register("description")} />
                    <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' placeholder='Image URL' type="text" {...register("image")} />
                    <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ' placeholder='Enter the full blog link' type="text" {...register("details")} />

                    <div className='flex justify-center items-center'>
                        <input className='bg-blue-500 font-semibold hover:bg-blue-700 text-white block rounded-lg w-52 px-4 py-3' value='Share Now' type="submit" />
                    </div>
                </form>
            </div>

        </div>
    );
};

export default PostBlog;