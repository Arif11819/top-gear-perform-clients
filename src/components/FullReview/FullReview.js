import React from 'react';
import { useParams } from 'react-router-dom';
import useReviewDetails from '../../hooks/useReviewDetails';

const FullReview = () => {
    const { reviewsId } = useParams();
    const [reviews, setReviews] = useReviewDetails(reviewsId);
    return (
        <div className='mt-24 mb-24'>
            <div className='lg:flex lg:flex-row flex flex-col lg:gap-24 lg:px-80'>
                <div class="avatar mt-8">
                    <div class="w-32 h-32 mx-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={reviews.img} />
                    </div>
                </div>
                <div>
                    <img className='w-28 mx-auto lg:mx-0' src={reviews.logo} alt="" />
                    <p className='lg:text-2xl text-1xl px-6 lg:px-0'>"{reviews.review}"</p>
                </div>
            </div>
            <div className='mt-24 lg:px-80'>
                <h2 className='lg:text-4xl text-2xl text-center lg:text-start px-3 lg:px-0 font-semibold'>{reviews.heading}</h2>
                <p className='pt-4 px-6 lg:px-0'>{reviews.description}</p>
            </div>
            <div className='mt-24 lg:px-80 px-4'>
                <video width="800px" src={reviews.video} type="video/mp4" controls>
                </video>
            </div>
        </div>
    );
};

export default FullReview;