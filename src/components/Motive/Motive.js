import React from 'react';
import './Motive.css'
const Motive = () => {
    return (
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src="https://i.ibb.co/C64gXpq/services-img-edited.png" className="rounded-lg motive-img" alt='' />
                <div>
                    <h2 className="text-4xl font-bold">What Makes Us Different?</h2>
                    <h3 className="text-xl font-bold mt-5">Data Security</h3>
                    <p className="">We give 100% data security by hosting our site in secure webserver</p>
                    <h3 className="text-xl font-bold mt-5">Dedicated 24/7 Support</h3>
                    <p className="">Dedicated global support team based in Global Time Zone</p>
                    <h3 className="text-xl font-bold mt-5">Company Grade Solution</h3>
                    <p className="">Pre-configured enterprise solution that is easy to use on the go.</p>
                    <h3 className="text-xl font-bold mt-5">Cost-Effective</h3>
                    <p className="">No hardware and 3rd party software costs or maintainance involved.</p>

                </div>
            </div>
        </div>
    );
};

export default Motive;