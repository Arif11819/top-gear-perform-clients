import React from 'react';

const BlogsData = ({ blog }) => {
    return (

        <div className='w-60 bg-sky-50  rounded'>
            <img className='cover rounded-xl p-2' src={blog.image} alt='' />
            <div className='p-2'>
                <h1 className=' text-xl'>{blog.title}</h1>
                <p className='text-sm text-gray-600 mt-1'>{blog.description}</p>
            </div>
            <div className='mt-2 p-2'>
                <a href={blog.details} target="_blank" className="px-3 py-1 border border-blue-300 relative rounded group overflow-hidden font-medium bg-purple-50 text-blue-600 inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-blue-500 group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white">Read More</span>
                </a>
            </div>
        </div>

    );
};

export default BlogsData;