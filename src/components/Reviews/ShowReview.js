import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import Review from './Review';

const ShowReview = () => {
    const [reviews] = useReviews();
    const navigate = useNavigate();
    const handleNavigateToAddReview = () => {
        navigate('/dashboard/reviews')
    }
    return (
        <div>
            <h1 className='text-3xl font-bold text-center mt-20'>See Why Customers Trust TopGear Perform <br /> To Drive Better Performance</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 lg:px-64 px-8 mt-24 mb-6'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
            <div className='text-center'>
                <button onClick={handleNavigateToAddReview} className='text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-6 py-3 mt-2 text-center cursor-pointer'>Add a Review</button>
            </div>
        </div>
    );
};

export default ShowReview;