import React from 'react';
import Execute from '../Execute/Execute';
import Faq from '../Faq/Faq';
import EmployeeEngagement from '../HomeSection/EmployeeEngagement/EmployeeEngagement';
import Management from '../HomeSection/Management/Management';
import PerformanceManagement from '../HomeSection/PerformanceManagement/PerformanceManagement';
import Recognition from '../Recognition/Recognition';
import BlogSection from './BlogSection/BlogSection';
import BusinessPlatform from './BusinessPlatform.js/BusinessPlatform';
import ExploreProduct from './ExploreProduct/ExploreProduct';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Navbar from './Header/Navbar';
import Partner from './Partner/Partner';

import TaskManagement from './TaskManagement/TaskManagement';
import WhyTopGare from './WhyTopGare/WhyTopGare';


const Home = () => {
    return (
        <div>
            <Navbar></Navbar>
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
            <Faq></Faq>
            <Execute></Execute>
            <Footer></Footer>
        </div>
    );
};

export default Home;