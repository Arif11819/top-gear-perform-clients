import React, { useEffect, useState } from 'react';
import BlogSectionData from './BlogSectionData';
import './BlogSection.css'
import { Link } from 'react-router-dom';
const BlogSection = () => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch('https://top-gear-perform-server.vercel.app/blog')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [blogs]);

    return (
        <div>
            <h1 className='text-4xl mb-20 mt-4 text-center font-bold'>Educate You and your Company More By Reading Our Blogs</h1>
            <div className='justify-items-center justify-center blog-section'>
                {blogs.slice(0, 5).map(blog => <BlogSectionData key={blog._id} blog={blog}></BlogSectionData>)}

            </div>
            <div className='text-center mt-8 mb-4'>
                <Link to='/blogs' className=" text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600  font-bold rounded-lg text-sm px-20 py-4 hover:text-white hover:bg-blue-700 text-center">Browse More Blogs</Link>
            </div>
        </div>
    );
};

export default BlogSection;
