import React from 'react';
import ActiveProjects from '../../ActiveProjects/ActiveProjects';
import Dashboard from '../../Dashboard/Dashboard';
import Employees from '../../Employees/Employees';
import Faq from '../../FAQ/Faq';
import Features from '../../Feature/Features/Features';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Logo from '../../Logo/Logo';
import Partners from '../../Partners/Partners';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Features></Features>
            <Employees />
            <Dashboard></Dashboard>
            <ActiveProjects />
            <Logo />
            <Faq></Faq>
            <Partners></Partners>
            <Footer></Footer>
        </div>
    );
};

export default Home;