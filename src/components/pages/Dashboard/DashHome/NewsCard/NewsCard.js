import React from 'react';
import './NewsCard.css'

const NewsCard = ({ news }) => {
    const { postDesc,postTime } = news
    return (
        <div className='news-card'>
           <div className='flex items-center mb-4'>
           <div className="avatar ">
                <div className="w-12 rounded-full">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSW47UEfYkQQFKwJfi2sD9SjB4uMYS6zC_RAw&usqp=CAU" alt='user profile' /> 
                </div>
            </div>
           <div>
           <p className='inline px-2'>Torikul Islam</p>
            <p className='post-date px-2'>{postTime}</p>
           </div>
            
           </div>
            <p>{postDesc}</p>
        </div>
    );
};

export default NewsCard;