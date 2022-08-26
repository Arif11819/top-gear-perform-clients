import React from 'react';
import './Header.css';
import { Link} from 'react-router-dom';

const Header = () => {
    return (
        <>
            <header>
                <div className="header-container">
                    <div className="header-content">
                        <h1 className='text-start py-4'>We Believe In Transparency, We Build The Trust.</h1>
                        <p className='banner-desc texl-sm'>Focus on Goals. Measure your Progress. Achieve Results</p>
                        <div>
                            <Link to="/login" className='primary-btn header-btn'>GET STARTED FREE</Link>
                            <button className='secondary-btn'> <Link id='demo-text' to="/schedule">SCHEDULE DEMO</Link> </button>
                        </div>
                        <div className='flex flex-row text-center mt-2 pl-8'>

                        </div>
                        <div className="awards-container mt-10">
                            <p className='award-title'>Awards & Recognitions</p>
                        </div>
                        <img src="https://i.ibb.co/bPt7jgz/awards.png" alt="" />

                    </div>
                    <div className="header-image">
                        <img src="https://cdns.profit.co/site/v1.2.21/images/banner-progress-img.png" alt="" />
                    </div>
                </div>


            </header>
        </>
    );
};

export default Header;