import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineStar } from 'react-icons/ai'
import useReviews from '../../hooks/useReviews';

const Review = ({ review }) => {
    const { _id, img, feedback, name, rating } = review;
    const [reviews, setReviews] = useReviews();
    const navigate = useNavigate();

    const handleNavigateToFullReview = (id) => {
        navigate(`/reviews/${id}`);
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure delete this?');
        if (proceed) {
            const url = `https://dry-ravine-83506.herokuapp.com/reviews/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    const remainingReview = reviews.filter(review => review._id !== id);
                    setReviews(remainingReview);
                })
        }
    }

    return (
        <div className="card w-80 h-84 bg-slate-50 shadow-xl border border-slate-200 text-slate-200">
            <div className='bg-blue-500 mt-32 ml-4 mr-4 mb-4 rounded-lg flex flex-col'>
                <div className="avatar mt-[-90px]">
                    <div className="w-28 h-28 mx-auto rounded-full ring ring-amber-200">
                        <img src={img} alt="" />
                    </div>
                </div>
                <div className="card-body pt-1 text-sm">
                    <div className='text-center pt-2'>
                        <p className='font-bold text-sm'>{name}</p>
                    </div>
                    <div className='flex justify-center items-center'>
                        {(rating == 1) && <div className='flex text-amber-400'>
                            <AiFillStar></AiFillStar>
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                        </div>}
                        {(rating == 2) && <div className='flex text-amber-400'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                            <AiOutlineStar />
                        </div>}
                        {(rating == 3) && <div className='flex text-amber-400'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                            <AiOutlineStar />

                        </div>}
                        {(rating == 4) && <div className='flex text-amber-400'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />

                        </div>}
                        {(rating == 5) && <div className='flex text-amber-400'>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />

                        </div>}
                    </div>

                    <div className='pt-1 flex'>
                        <h2>
                            "{feedback}"
                        </h2>
                    </div>
                    <div className="card-actions pt-3 text-black flex">
                        <div className="bg-amber-500 p-1 rounded-sm"><button onClick={() => handleNavigateToFullReview(_id)} >Read full case study</button></div>
                        <div className="bg-red-500 p-1 rounded-sm"><button onClick={() => handleDelete(_id)} >Remove</button></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;