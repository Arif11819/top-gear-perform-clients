import React, { useState } from 'react';
import './DashHome.css'
import { ImNewspaper } from 'react-icons/im'
import { BsFillPlusCircleFill } from 'react-icons/bs'
const DashHome = () => {
    const [post, setPost] = useState(false)
    return (
        <div className='dash-home-container '>
            <div className="dash-sidebar">
                this is home sidebar
            </div>
            <div className="newsfeed-container  p-8">
                <div className="newsfeed-nav">
                    <div className='h-full flex justify-between items-center'>
                        <div className="news-nav-add flex items-center ">
                            <ImNewspaper className='inline text-xl' /><p className='inline mx-3'>News Feed</p>
                            <button onClick={() => setPost(!post)}><BsFillPlusCircleFill className='plus' /></button>
                        </div>
                        <div className="news-nav-search">
                            <input placeholder='Find news' type="text" className='rounded' /> <button >Search</button>
                        </div>
                    </div>
                </div>
                <hr />
                {post &&
                    <>
                        <div className="post-container">
                            <textarea placeholder="What's on your mind ?" name="post" rows="5"></textarea>
                        </div>
                        <div className='post-handle'>
                            <button onClick={() => setPost(!post)}>Cancel</button>
                            <button className='post-button'>Post</button>
                        </div>
                    </>
                }
            </div>

            <div className="news-container">

            </div>
        </div>
    );
};

export default DashHome;