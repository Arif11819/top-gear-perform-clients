import React from 'react';
import { useNavigate } from 'react-router-dom';

const Review = ({ review }) => {
    const { _id, img, feedback, name, position, logo } = review;
    const navigate = useNavigate();

    const handleNavigateToFullReview = (id) => {
        navigate(`/reviews/${id}`);
    }
    return (
        <div class="card w-80 bg-base-100 shadow-xl">
            <figure><img className='w-full' src={img} alt="Shoes" /></figure>
            <div className="card-body pt-3">
                <h2 className="">
                    {feedback}
                </h2>
                <div className='pt-4 flex pb-8'>
                    <div>
                        <p className='font-bold text-sm'>{name}</p>
                        <p className='text-sm'>{position}</p>
                    </div>
                    <div className='pl-10 pt-6'>
                        <img src={logo} alt="" />
                    </div>
                </div>
                <div class="card-actions justify-between">
                    <div class="badge badge-outline p-3"><button onClick={() => handleNavigateToFullReview(_id)} >Read full case study</button></div>
                    <div class="badge badge-outline p-3 bg-blue-400"><button>Watch Now</button></div>

                </div>
            </div>
        </div>
    );
};

export default Review;