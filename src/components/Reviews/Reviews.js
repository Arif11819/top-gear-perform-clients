import React from 'react';
import useReviews from '../../hooks/useReviews';
import Recognition from '../Recognition/Recognition';
import AddReview from './AddReview';
import Review from './Review';
import { IoPeopleCircleSharp } from "react-icons/io5";

const Reviews = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <div className='bg-blue-500 mx-72 mb-8 rounded-lg'>
                <h1 className='mb-5 pt-5 flex items-center mt-10 text-lg pl-[400px] text-white font-bold'> <IoPeopleCircleSharp className='text-2xl'></IoPeopleCircleSharp><p className='pl-1 text-md'>Add a Review</p></h1>
                <AddReview></AddReview>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 lg:px-64 px-8 mt-24 mb-28'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;