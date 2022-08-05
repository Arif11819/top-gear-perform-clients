import React from 'react';
import useReviews from '../../hooks/useReviews';
import Recognition from '../Recognition/Recognition';
import Review from './Review';

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h2 className='text-2xl lg:text-4xl my-10 flex justify-center items-center font-bold h-16'> Hear from our Happy Customers</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 lg:px-64 px-8 mt-24 mb-28'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <Recognition></Recognition>
        </div>
    );
};

export default Reviews;