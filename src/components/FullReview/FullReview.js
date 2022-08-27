import React from 'react';
import { useParams } from 'react-router-dom';
import useReviewDetails from '../../hooks/useReviewDetails';

const FullReview = () => {
    const { reviewsId } = useParams();
    const [reviews, setReviews] = useReviewDetails(reviewsId);
    return (
        <div className='mt-24 mb-24 flex flex-col'>
            <div className='lg:flex lg:flex-row flex flex-col lg:gap-24 lg:px-80'>
                <div className="avatar mt-8 flex">
                    <div className="w-32 h-32 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={reviews.img} alt='' />
                    </div>
                </div>
                <div className='pl-10'>
                    <p className='lg:text-2xl text-1xl px-6 lg:px-0'>"{reviews.review}"</p>
                </div>
            </div>
            <div className='lg:px-80 mt-20'>
                <h2 className='lg:text-4xl text-2xl text-center lg:text-start px-3 text-blue-600 lg:px-0 font-bold'>{reviews.heading}</h2>
                <p className='pt-4 px-6 lg:px-0'>{reviews.description}</p>
            </div>
        </div>
    );
};

export default FullReview;