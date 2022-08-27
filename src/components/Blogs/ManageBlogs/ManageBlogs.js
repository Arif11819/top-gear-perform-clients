import React, { useEffect, useState } from 'react';
import PostBlog from '../PostBlog/PostBlog';
import ManageBlogsData from './ManageBlogsData/ManageBlogsData';

const ManageBlogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs]);
    return (
        <div >
            <PostBlog />
            <h1 className='text-4xl mb-16 mt-5  text-center font-bold text-black'>Manage Our Shared Blogs</h1>
            <div className='justify-items-center blog'>
                {blogs.map(blog => <ManageBlogsData key={blog._id} blog={blog}></ManageBlogsData>)}

            </div>
        </div>
    );
};

export default ManageBlogs;