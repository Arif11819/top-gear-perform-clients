import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='col-1'>
                <img src='https://i.ibb.co/xfK3VL0/topgear-logo.png' width='90%' alt=''></img>
                <h4 className='font-bold mb-4'>USEFUL LINKS</h4>
                <a href='/'>Documentation</a>
                <a href='/'>Some Demo</a>
                <a href='/'>About Us</a>
                <a href='/'>Support</a>


            </div>

            <div className='col-2'>
                <h3 className='font-semibold'>SERVICES</h3>
                <a href='/'>Marketing</a>
                <a href='/'>Analysis</a>
                <a href='/'>Data Solutions</a>
                <a href='/'>Management</a>
                <a href='/'>Pricing</a>
                <a href='/'>Blog</a>
            </div>
            <div className='col-3'>
                <h3 className='font-semibold'>TRENDING ITEMS</h3>
                <a href='/'>Digital Solutions</a>
                <a href='/'>Global Partnerships</a>
                <a href='/'>Transparency Report</a>

                <div className='socials'>
                    <h3 className='font-semibold'>FOLLOW US</h3>
                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>
                    <i className="fab fa-twitch"></i>
                </div>
            </div>
        </div>
    );
};

export default Footer;