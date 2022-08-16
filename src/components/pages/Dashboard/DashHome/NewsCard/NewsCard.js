import React from 'react';
import './NewsCard.css'

const NewsCard = ({ news }) => {
    const { postDesc,postTime } = news
    return (
        <div className='news-card'>
           <div className='flex items-center mb-4'>
           <div class="avatar ">
                <div class="w-12 rounded-full">
                    <img src="https://placeimg.com/192/192/people" alt='user profile' /> 
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