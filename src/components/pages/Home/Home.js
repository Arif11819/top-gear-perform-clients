import React from 'react';
import ActiveProjects from '../../ActiveProjects/ActiveProjects';
import Dashboard from '../../Dashboard/Dashboard';
import Employees from '../../Employees/Employees';
import Features from '../../Feature copy/Features/Features';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Logo from '../../Logo/Logo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Features />
            <Employees />
            <Dashboard></Dashboard>
            <ActiveProjects />
            <Logo />
            <Footer></Footer>
        </div>
    );
};

export default Home;