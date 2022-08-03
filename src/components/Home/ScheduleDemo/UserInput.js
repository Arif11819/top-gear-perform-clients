import React from 'react';
import './UserInput.css'

const UserInput = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <div className='flex flex-col'>
                <label class="custom-field one">
                    <input type="text" placeholder=" " />
                    <span class="placeholder">Name</span>
                </label>
                <label class="custom-field one">
                    <input type="text" placeholder=" " />
                    <span class="placeholder">Company</span>
                </label>
            </div>
            <div className='flex flex-col'>
                <label class="custom-field one">
                    <input type="text" placeholder=" " />
                    <span class="placeholder">Email</span>
                </label>
                <label class="custom-field one">
                    <input type="text" placeholder=" " />
                    <span class="placeholder">Phone Number</span>
                </label>
            </div>
        </div>
    );
};

export default UserInput;