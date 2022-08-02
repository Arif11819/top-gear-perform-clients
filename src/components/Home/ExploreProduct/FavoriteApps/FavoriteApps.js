import React from 'react';

const FavoriteApps = () => {
    return (
        <section className='overflow-hidden my-4'>
            <h2 className='text-4xl text-center font-bold mt-5'>Integrate with your favorite apps</h2>
            <div className='text-center mx-auto'>
                <p className='w-[60%] mx-auto my-4 text-slate-700'>We integrate with Jira, Slack, G Suite, Zapier, Teams, Office 365, and many more. You can connect with Profit.co OKR Software to integrate users, tasks, and also check in your key results within the apps.</p>
                <button className='uppercase bg-[#4392e7] p-2 text-white rounded-lg shadow-md text-sm hover:bg-[#549ae6]'>discover more</button>
            </div>
            <img className='scale-x-150 md:h-[450px]' src="https://storage.googleapis.com/profit-prod/wp-content/uploads/2022/04/16a0a9be-inttegration.png" alt="" />
        </section >
    );
};

export default FavoriteApps;