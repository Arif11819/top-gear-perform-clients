import React from 'react';
import { Link } from 'react-router-dom';
const BlogHeading = () => {
    return (
        <div class="hero mt-10 mb-10 ">
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 className="text-4xl font-bold">TopGear Perform Blog</h1>
                    <p class="py-6">Read about the latest performance management topics here and be knowledgeable on balancing employee wants with business needs when it comes to compensation.</p>
                    <Link to='/schedule' class="relative inline-flex items-center justify-start px-7 py-2 overflow-hidden font-medium transition-all bg-orange-600 rounded-xl group">
                        <span class="absolute top-0 right-0 inline-block w-4 h-4 transition-all duration-500 ease-in-out bg-orange-700 rounded group-hover:-mr-4 group-hover:-mt-4">
                            <span class="absolute top-0 right-0 w-5 h-5 rotate-45 translate-x-1/2 -translate-y-1/2 bg-white"></span>
                        </span>
                        <span class="absolute bottom-0 left-0 w-full h-full transition-all duration-500 ease-in-out delay-200 -translate-x-full translate-y-full bg-orange-600 rounded-2xl group-hover:mb-12 group-hover:translate-x-0"></span>
                        <span class="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-white">SCHEDULE DEMO</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BlogHeading;