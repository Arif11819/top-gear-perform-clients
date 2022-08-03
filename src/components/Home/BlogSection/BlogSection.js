import React from 'react';

const BlogSection = () => {
    return (

        // Mazharul section

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-10 rounded-md pb-5'>
            <div className='bg-[#f3f8ff] rounded-md'>
                <div className='pl-10 pt-5'>
                    <h3 className='bg-[#d3e8ed] p-1 rounded-md inline-block text-sm'>LATEST BLOG</h3>
                    <h2 className='text-xl font-bold py-4'>22 Benefits of Using OKR in your Organization</h2>
                    <p className='text-slate-600'>OKR offers several benefits compared to other goal-management frameworks. We have listed 22 benefits of using OKRs in this article..</p>
                    <div className='flex justify-between items-center pr-0'>
                        <div className='flex flex-col gap-y-5'>
                            <button className='uppercase bg-[#4392e7] py-2 px-4 text-white rounded-lg shadow-md text-sm hover:bg-[#549ae6]'>read more</button>
                            <a className='text-[#4392e7] uppercase text-sm' href="#">view all blog</a>
                        </div>
                        <img src="https://i.ibb.co/HYqsS49/home-sprite-circle.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[#f3f8ff] rounded-md'>
                <div className='pl-10 pt-5'>
                    <h3 className='bg-[#d3e8ed] p-1 rounded-md inline-block text-sm'>LATEST BLOG</h3>
                    <h2 className='text-xl font-bold py-4'>What is OKR?</h2>
                    <p className='text-slate-600'>OKR is a goal management system used by teams, large and small, to collaborate and achieve stretch goals through a framework that requires regular check-ins, feedback, continuous learning, collaboration and problem..</p>
                    <div className='flex justify-between pt-5'>
                        <div className='flex flex-col gap-y-5'>
                            <button className='uppercase bg-[#4392e7] py-2 px-4 text-white rounded-lg shadow-md text-sm hover:bg-[#549ae6]'>read more</button>
                            <a className='text-[#4392e7] uppercase text-sm' href="#">view all blog</a>
                        </div>
                        <img src="https://i.ibb.co/qjrsSC5/home-sprite-ball.png" alt="" />
                    </div>
                </div>
            </div>
            <div className='bg-[#f3f8ff] rounded-md'>
                <div className='pl-10'>
                    <div className='flex justify-end items-start'>
                        <img className='absolute' src="https://i.ibb.co/qjrsSC5/home-sprite-ball.png" alt="" />
                    </div>
                    <h3 className='bg-[#d3e8ed] p-1 rounded-md inline-block text-sm mt-5'>LATEST BLOG</h3>
                    <h2 className='text-xl font-bold py-4'>How to set great OKRs?</h2>
                    <p className='text-slate-600'>Are you looking for a toolkit to help you craft amazing OKRs and get rolling with this powerful goal-setting framework in your business?</p>
                    <div className='flex justify-between items-center pr-0'>
                        <div className='flex flex-col gap-y-5'>
                            <button className='uppercase bg-[#4392e7] py-2 px-4 text-white rounded-lg shadow-md text-sm hover:bg-[#549ae6]'>read more</button>
                            <a className='text-[#4392e7] uppercase text-sm' href="#">view all blog</a>
                        </div>
                        <img src="https://i.ibb.co/mHkBNGY/home-sprite-book.png" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogSection;