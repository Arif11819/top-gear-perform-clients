import React from 'react';
import { toast } from 'react-toastify';
import { useForm } from 'react-hook-form';
const PublishBook = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {

        const url = `https://dry-ravine-83506.herokuapp.com/ebook`;
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
                toast.success('A new book has been added  ')
                reset()
            })

    };

    return (
        <section class="bg-slate-50">
            <h1 className='text-4xl mb-4 mt-4 mx-a text-center font-bold text-black'>Publish a new Book  </h1>
            <div class="grid max-w-screen-xl mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">

                <div class="mr-auto place-self-center lg:col-span-7 mx-auto">

                    <div className=' mb-20 mt-5 items-center justify-start'>
                        <form className='w-96' onSubmit={handleSubmit(onSubmit)}>
                            <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' placeholder='Book Image URL' type="text" {...register("image")} />
                            <input className='mb-2 appearance-none rounded-none relative block w-full px-5 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' placeholder='Type the book name here' type='text' {...register("name")} />

                            <textarea className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm' placeholder='Write some description about the book' type="text" {...register("description")} />

                            <input className='mb-2 appearance-none rounded-none relative block w-full px-3 py-2 border border-slate-500  text-gray-900 rounded-t-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 focus:z-10 sm:text-sm ' placeholder='Enter the book pdf link' type="text" {...register("pdf")} />

                            <input className='bg-blue-500 font-semibold hover:bg-blue-700 text-white block rounded-lg w-52 px-4 py-3' value='Publish Now' type="submit" />
                        </form>
                    </div>

                </div>
                <div class="hidden lg:mt-0 lg:col-span-5 lg:flex">
                    <img src="https://i.ibb.co/tYNTkJf/istockphoto-166025443-612x612-removebg-preview.png" alt="mockup" />
                </div>
            </div>
        </section>
    );
};

export default PublishBook;