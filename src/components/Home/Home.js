import React from 'react';
import EmployeeEngagement from '../HomeSection/EmployeeEngagement/EmployeeEngagement';
import Management from '../HomeSection/Management/Management';
import PerformanceManagement from '../HomeSection/PerformanceManagement/PerformanceManagement';
import NewsLetter from '../NewsLetter/NewsLetter';


import BlogSection from './BlogSection/BlogSection';
import BusinessPlatform from './BusinessPlatform.js/BusinessPlatform';
import ExploreProduct from './ExploreProduct/ExploreProduct';
import Header from './Header/Header';
import Partner from './Partner/Partner';

import TaskManagement from './TaskManagement/TaskManagement';
import WhyTopGear from './WhyTopGare/WhyTopGear';



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

            <BlogSection></BlogSection>
            <WhyTopGear />
            <NewsLetter />

        </div>
    );
};

export default Home;