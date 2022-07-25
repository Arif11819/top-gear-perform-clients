import React from 'react';
import Dashboard from '../../Dashboard/Dashboard';
import Employees from '../../Employees/Employees';
import Features from '../../Feature/Features/Features';
import Footer from '../../Footer/Footer';
import Header from '../../Header/Header';
import Logo from '../../Logo/Logo';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Features></Features>
            <Employees />
            <Dashboard></Dashboard>
            <Logo />
            <Footer></Footer>
        </div>
    );
};

export default Home;