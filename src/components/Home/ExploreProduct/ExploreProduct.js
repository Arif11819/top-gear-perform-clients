import React from 'react';
import HrCloud from './HrCloud';
import ItCloud from './ItCloud';

//  Mazharul section      

const ExploreProduct = () => {
    return (
        <div className='bg-[#f6f3f0] pb-10 mt-32'>
            <div className='text-center lg:w-2/4 w-full mx-auto p-10'>
                <h5 className='text-sm font-bold font-serif'>THE #1 RATED WORKFORCE PLATFORM</h5>
                <h1 className='text-4xl p-5'>Explore Rippling by product</h1>
                <p>Built on the first <a className='text-blue-600' href="#">Unified Workforce Platform</a>, Rippling has every app you need to effortlessly run a global workforce—from HR to IT.</p>
            </div>
            <div className='container md:flex justify-around gap-5 mx-auto'>
                <div>
                    <HrCloud />
                </div>
                <div>
                    <ItCloud />
                </div>
            </div>
        </div>
    );
};

export default ExploreProduct;