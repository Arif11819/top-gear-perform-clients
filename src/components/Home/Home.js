import React from 'react';
import EmployeeEngagement from '../HomeSection/EmployeeEngagement/EmployeeEngagement';
import Management from '../HomeSection/Management/Management';
import PerformanceManagement from '../HomeSection/PerformanceManagement/PerformanceManagement';
import NewsLetter from '../NewsLetter/NewsLetter';
import Recognition from '../Recognition/Recognition';
import BlogSection from './BlogSection/BlogSection';
import BusinessPlatform from './BusinessPlatform.js/BusinessPlatform';
import ExploreProduct from './ExploreProduct/ExploreProduct';
import Header from './Header/Header';
import Partner from './Partner/Partner';

import TaskManagement from './TaskManagement/TaskManagement';
import WhyTopGare from './WhyTopGare/WhyTopGare';


const Home = () => {
    return (
        <div>
            <Header></Header>
            <ExploreProduct></ExploreProduct>
            <Partner></Partner>
            <BusinessPlatform></BusinessPlatform>
            <Management></Management>
            <TaskManagement />
            <PerformanceManagement></PerformanceManagement>
            <EmployeeEngagement></EmployeeEngagement>
            <Recognition></Recognition>
            <BlogSection></BlogSection>
            <WhyTopGare></WhyTopGare>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;