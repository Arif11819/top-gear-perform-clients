import React from 'react';
import './Header.css'
import Navbar from './Navbar';
const Header = () => {
    return (
        <header>
            <div className="overly">
                <Navbar />
                <div className="header-container">
                    <div className="header-content" data-aos="fade-right" data-aos-duration="1000" >
                        <h1>Helping people with hight drive track! </h1>
                        <p>Happy goals combine goal setting and journalling goals give you direction.Journalling cultivates discipline. Direction + discipline change you life !</p>
                        <button>See Demos</button>
                    </div>
                    <div className="header-image">
                        <img data-aos="fade-left" data-aos-duration="1000" src="https://i.ibb.co/G7vd71B/Site-Stats-pana.png" alt="" />
                    </div>
                </div>
            </div>

        </header >
    );
};

export default Header;