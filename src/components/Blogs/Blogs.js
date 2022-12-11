import React, { useEffect, useState } from 'react';
import BlogHeading from './BlogHeading/BlogHeading';
import './Blogs.css'
import BlogsData from './BlogsData/BlogsData';
const Blogs = () => {

    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://top-gear-perform-server.up.railway.app/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs]);

    return (
        <div >
            <BlogHeading />
            <div className='justify-items-center blog'>
                {blogs.map(blog => <BlogsData key={blog._id} blog={blog}></BlogsData>)}

            </div>
        </div>
    );
};

export default Blogs;