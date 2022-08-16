import React, { useState } from 'react';
import './DashHome.css'
import { ImNewspaper } from 'react-icons/im'
import { BsFillPlusCircleFill } from 'react-icons/bs'
import { useEffect } from 'react';
import NewsCard from './NewsCard/NewsCard';
import auth from '../../../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
const DashHome = () => {

    const [user] = useAuthState(auth)
    const [post, setPost] = useState(false)
    const [newses, setNews] = useState([])
    const [postDescription, setPostDescription] = useState('')
    const date = new Date()
    const day = date.getDate()
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    const time = `${day} ${month} ${year} `


    useEffect(() => {
        fetch('http://localhost:4000/news')
            .then(res => res.json())
            .then(data => setNews(data))
    }, [])

    const handlePost = () => {
        const postDesc = postDescription
        const userEmail = user?.email
        const postTime = time
        const postData = { postDesc, userEmail, postTime }
        fetch('http://localhost:4000/postNews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(postData)
        })
            .then(res => res.json())
            .then(data => console.log(data))

    }
    return (
        <div className='dash-home-container '>
            <div className="dash-sidebar">
                this is home sidebar
            </div>
            <div className="newsfeed-container p-8">
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
                            <textarea onBlur={(e) => setPostDescription(e.target.value)} placeholder="What's on your mind ?" name="post" rows="5"></textarea>
                        </div>
                        <div className='post-handle'>
                            <button onClick={() => setPost(!post)}>Cancel</button>
                            <button onClick={handlePost} className='post-button'>Post</button>
                        </div>
                    </>
                }
                <div className="news-container">
                    {
                        newses.map(news => <NewsCard news={news} />)
                    }
                </div>
            </div>


        </div>
    );
};

export default DashHome;