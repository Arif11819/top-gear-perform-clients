import React from 'react';
import './Footer.css'
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className='footer'>
            <div className='col-1'>

                <h3 className='font-semibold mb-4'>COMPANY</h3>
                <Link to='/'>Documentation</Link>
                <Link to='/schedule'>Book Our Demo</Link>
                <Link to='/team-members'>Our Team</Link>
                <Link to='/aboutUs'>About Us</Link>
                <Link to='/contact'>Support</Link>
                <Link to='/'>Our Partners</Link>
                <Link to='/terms'>Terms of Service</Link>
                <Link to='/privacy-policy'>Privacy Policy</Link>
                <div className='socials'>

                    <i href="" target="_blank" className="fab fa-facebook"></i>
                    <i href="" target="_blank" className="fab fa-twitter"></i>
                    <i href="" target="_blank" className="fab fa-linkedin"></i>

                    <i href="" target="_blank" className="fab fa-youtube"></i>
                    <i href="" target="_blank" className="fab fa-instagram"></i>
                </div>

            </div>

            <div className='col-2'>
                <h3 className='font-semibold'>RESOURCES</h3>
                <Link to='/'>Marketing</Link>
                <Link to='/login'>Analysis</Link>
                <Link to='/'>Data Solutions</Link>
                <Link to='/login'>Management</Link>
                <Link to='/pricing'>Pricing</Link>
                <Link to='/'>Integrations</Link>
                <Link to='/'>Webinar</Link>
                <Link to='/'>API Documentation</Link>
            </div>
            <div className='col-3'>
                <h3 className='font-semibold'>SUPPORT</h3>
                <Link to='/'>Digital Solutions</Link>
                <Link to='/'>Global Partnerships</Link>
                <Link to='/'>Transparency Report</Link>
                <Link to='/'>IT Cloud Overview</Link>
                <Link to='/login'>Learning Management</Link>
                <Link to='/login'>Talent Management</Link>

            </div>
            <div className='col-4'>
                <h3 className='font-semibold'>APPS</h3>
                <a href="https://play.google.com/" target="_blank"> <img className='w-28' src='https://i.ibb.co/4fH1k6c/play-store-logo-nisi-filters-australia-11.png' alt=''></img></a>
                <a href="https://www.apple.com/app-store/" target="_blank"> <img className='w-28 mb-1' src='https://i.ibb.co/sJRRQ5N/92-921027-join-our-newsletter-app-store.jpg' alt=''></img></a>
                <a href="https://www.microsoft.com/en-us/" target="_blank">   <img className='w-28' src='https://i.ibb.co/HVtrCXB/images.png' alt=''></img></a>
                <a href="" target="_blank"><img className='w-28 mt-1' src='https://i.ibb.co/tDLGMh0/classic-mac-os-logo-900x330.png' alt=''></img></a>

            </div>

        </div>
    );
};

export default Footer;