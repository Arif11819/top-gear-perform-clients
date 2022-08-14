import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div className='footer'>
            <div className='col-1'>

                <h3 className='font-semibold mb-4'>COMPANY</h3>
                <a href='/'>Documentation</a>
                <a href='/'>Some Demo</a>
                <a href='/'>About Us</a>
                <a href='/'>Support</a>
                <a href='/'>Accountants</a>
                <a href='/'>Our Partners</a>
                <a href='/'>Terms of Service</a>
                <a href='/'>Privacy Policy</a>
                <div className='socials'>

                    <i className="fab fa-facebook"></i>
                    <i className="fab fa-twitter"></i>
                    <i className="fab fa-linkedin"></i>

                    <i class="fab fa-youtube"></i>
                    <i class="fab fa-instagram"></i>
                </div>

            </div>

            <div className='col-2'>
                <h3 className='font-semibold'>RESOURCES</h3>
                <a href='/'>Marketing</a>
                <a href='/'>Analysis</a>
                <a href='/'>Data Solutions</a>
                <a href='/'>Management</a>
                <a href='/'>Pricing</a>
                <a href='/'>Integrations</a>
                <a href='/'>Webinar</a>
                <a href='/'>API Documentation</a>
            </div>
            <div className='col-3'>
                <h3 className='font-semibold'>SUPPORT</h3>
                <a href='/'>Digital Solutions</a>
                <a href='/'>Global Partnerships</a>
                <a href='/'>Transparency Report</a>
                <a href='/'>IT Cloud Overview</a>
                <a href='/'>Learning Management</a>
                <a href='/'>Talent Management</a>

            </div>
            <div className='col-4'>
                <h3 className='font-semibold'>APPS</h3>
                <img className='w-28' src='https://i.ibb.co/4fH1k6c/play-store-logo-nisi-filters-australia-11.png' alt=''></img>
                <img className='w-28 mb-1' src='https://i.ibb.co/sJRRQ5N/92-921027-join-our-newsletter-app-store.jpg' alt=''></img>
                <img className='w-28' src='https://i.ibb.co/HVtrCXB/images.png' alt=''></img>
                <img className='w-28 mt-1' src='https://i.ibb.co/tDLGMh0/classic-mac-os-logo-900x330.png' alt=''></img>

            </div>

        </div>
    );
};

export default Footer;