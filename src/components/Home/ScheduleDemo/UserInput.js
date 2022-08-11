import React from 'react';
import './UserInput.css'

const UserInput = ({ setUserName, setEmail, setCompanyName, setPhoneNumber }) => {
    const handleUserName = e => {
        setUserName(e.target.value);
    }
    const handleEmail = e => {
        setEmail(e.target.value)
    }
    const handleCompanyName = e => {
        setCompanyName(e.target.value)
    }
    const handlePhoneNumber = e => {
        setPhoneNumber(e.target.value)
    }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col'>
                <label className="custom-field one">
                    <input onChange={handleUserName} type="text" placeholder=" " />
                    <span className="placeholder">Name</span>
                </label>
                <label className="custom-field one">
                    <input onChange={handleCompanyName} type="text" placeholder=" " />
                    <span className="placeholder">Company</span>
                </label>
            </div>
            <div className='flex flex-col'>
                <label className="custom-field one">
                    <input onChange={handleEmail} type="text" placeholder=" " />
                    <span className="placeholder">Email</span>
                </label>
                <label className="custom-field one">
                    <input onChange={handlePhoneNumber} type="text" placeholder=" " />
                    <span className="placeholder">Phone Number</span>
                </label>
            </div>
        </div>
    );
};

export default UserInput;