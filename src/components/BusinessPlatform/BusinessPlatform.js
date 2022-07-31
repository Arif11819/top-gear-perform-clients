import React from 'react';
import Card from './Card';


const BusinessPlatform = () => {
    return (
        <div>
             <h1 className='text-4xl mt text-center p-2 font-bold'>Experience the world’s best
                    <br /> iterative business execution platform
                    </h1>
                    <p className='text-center text-xl p-8 text-gray-400'>Grow your business with our All-Inclusive OKR Tool</p>
            <div class="hero ">
               
                <div class="hero-content flex-col w lg:flex-row-reverse p-8 ">
                    
                    <img src="https://i.ibb.co/xCyYYns/Logo.png" class="max-w-sm rounded-lg lg:ml-20 " alt='video icon' />

                    <div className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6 sm:mt-10 '>
                            <Card img= "https://i.ibb.co/1dPFd8f/task-list.png" title={'Task Management '} downTitle= {`Track Better. Do More.`}/>
                            <Card img= "https://i.ibb.co/h8WJLh0/employee.png" title={'Employee Engagement '} downTitle={`Build Trust. Boost Engagement.`}/>
                            <Card img= "https://i.ibb.co/rv3sq23/archery.png" title={`OKR Management `} downTitle={`Focus. Measure. Achieve.`}/>
                            <Card img= "https://i.ibb.co/2PG9HsK/growth.png" title={`Performance Management`} downTitle={`Leverage OKRs. Ignite Performance.`}/>
                            
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BusinessPlatform;