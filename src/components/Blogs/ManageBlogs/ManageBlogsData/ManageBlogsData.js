import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
const ManageBlogsData = ({ blog }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs]);

    const handleDeleteBlog = id => {

        const url = `http://localhost:5000/blog/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    const remaining = blogs.filter(blog => blog._id !== id);
                    setBlogs(remaining)
                }
                toast.error('Blog has been removed  ')
                console.log(data);

            })
    };



    return (
        <div className='w-60 bg-sky-50  rounded'>
            <img className='cover rounded-xl p-2' src={blog.image} alt='' />
            <div className='p-2'>
                <h1 className='font-extrabold text-xl'>{blog.title}</h1>
                <p className='text-sm text-gray-600 mt-1'>{blog.description}</p>
            </div>
            <div className='mt-2 p-2'>

                <button onClick={() => handleDeleteBlog(blog._id)} className="px-3 py-1 border border-red-300 relative rounded group overflow-hidden font-medium bg-red-50 text-red-600 inline-block">
                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-500 group-hover:h-full opacity-90"></span>
                    <span className="relative group-hover:text-white">Remove Blog</span>
                </button>
            </div>
        </div>
    );
};

export default ManageBlogsData;