import React from 'react';
import Execute from '../Execute/Execute';
import EmployeeEngagement from '../HomeSection/EmployeeEngagement/EmployeeEngagement';
import Management from '../HomeSection/Management/Management';
import PerformanceManagement from '../HomeSection/PerformanceManagement/PerformanceManagement';
import NewsLetter from '../NewsLetter/NewsLetter';


import BlogSection from './BlogSection/BlogSection';
import BusinessPlatform from './BusinessPlatform.js/BusinessPlatform';
import CountDown from './CountDown/CountDown';
import ExploreProduct from './ExploreProduct/ExploreProduct';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Partner from './Partner/Partner';

import TaskManagement from './TaskManagement/TaskManagement';
import WhyTopGear from './WhyTopGare/WhyTopGear';



const Home = () => {
    const TWENTY_DAYS_IN_MS = 190 * 9 * 17 * 60 * 1000;
    const NOW_IN_MS = new Date().getTime();

    const dateTimeAfterTwentyDays = NOW_IN_MS + TWENTY_DAYS_IN_MS;
    return (
        <div className='home-color'>
            <Header></Header>
            {/* <ExploreProduct></ExploreProduct> */}
            <Partner></Partner>
            <BusinessPlatform></BusinessPlatform>
            <Management></Management>
            <TaskManagement />
            <PerformanceManagement></PerformanceManagement>
            <EmployeeEngagement></EmployeeEngagement>
            {/* <BlogSection></BlogSection> */}
            {/* <WhyTopGear /> */}
            <CountDown targetDate={dateTimeAfterTwentyDays}></CountDown>
            <NewsLetter></NewsLetter>
            <Execute></Execute>
            <Footer></Footer>
        </div>
    );
};

export default Home;