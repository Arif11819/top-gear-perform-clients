import React, { useState } from 'react';
import './UserCount.css'

const UserCount = () => {
    const [userCount, setUserCount] = useState('1-50');
    console.log(userCount);
    const handleChange = (event) => {
        setUserCount(event.target.value)
    }
    return (
        <div>
            <form className='flex justify-evenly py-2 gap-3'>
                <div>
                    <input
                        type="radio"
                        id='1st'
                        value="1-50"
                        checked={userCount === '1-50'}
                        onChange={handleChange}
                    />
                    <label htmlFor="1st">
                        <div>
                            <h3>1-50 Users</h3>
                        </div>
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        id='2nd'
                        value="51-100"
                        checked={userCount === '51-100'}
                        onChange={handleChange}
                    />
                    <label htmlFor="2nd">
                        <div>
                            <h3>51-100 Users</h3>
                        </div>
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        id='3rd'
                        value="101-300"
                        checked={userCount === '101-300'}
                        onChange={handleChange}
                    />
                    <label htmlFor="3rd">
                        <h3>101-300 Users</h3>
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        id='4th'
                        value="301-500"
                        checked={userCount === '301-500'}
                        onChange={handleChange}
                    />
                    <label htmlFor="4th">
                        <h3>301-500 Users</h3>
                    </label>
                </div>
                <div>
                    <input
                        type="radio"
                        id='5th'
                        value="1000+"
                        checked={userCount === '1000+'}
                        onChange={handleChange}
                    />
                    <label htmlFor="5th">
                        <h3>1000+ Users</h3>
                    </label>
                </div>

            </form>
        </div>
    );
};

export default UserCount;