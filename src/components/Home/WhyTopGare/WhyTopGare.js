import React from 'react';
import TopGare from './TopGare';

const WhyTopGare = () => {
    return (
        <div className='mt-10  '>
            <div>
                <h1 className='text-center text-3xl p-4'>Why TopGear</h1>
                <h1 className='text-center text-xl p-4'>Beacuse you need a free and easy way to communicate with you customers  </h1>

            </div>


            <div className='flex justify-center align-center' >
                <div className=' grid grid-cols-1 lg:grid-cols-3 mb-10 gap-10 sm:mt-10 '>


                    <TopGare title="Get close" titleP='Your customers have questions before they buy.
                Be where they are, when they need  you, so they
                haave the confidence they need to choose you over
                the compeltion, every time.' img="https://i.ibb.co/YRkSPTC/transistor-analytics-of-work-on-schedule-in-teamwork-of-people.png" />

                    <TopGare title="Get organized" titleP='Your customers have questions before they buy.
                Be where they are, when they need  you, so they
                haave the confidence they need to choose you over
                the compeltion, every time.' img="https://i.ibb.co/rybgRcj/juicy-web-designer-girl-making-landing-page-with-video-color-palette-and-site-blocks.png" />


                    <TopGare title="Get in front" titleP='Your customers have questions before they buy.
                Be where they are, when they need  you, so they
                haave the confidence they need to choose you over
                the compeltion, every time.' img="https://i.ibb.co/44GtJYY/teams-planning-and-discussion-of-new-ideas-by-men.png" />

                </div>
            </div>


        </div>
    );
};

export default WhyTopGare;