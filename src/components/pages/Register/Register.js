import React, { useState } from 'react';
import './Register.css'
const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setpasswordError] = useState('')
    const [confirmPasswordError, setconfirmPasswordError] = useState('')



    const submitResgisterForm = (event) => {
        event.preventDefault()

        const email = event.target.email.value
        const password = event.target.password.value
        const confirmPassword = event.target.confirmPassword.value

        // handle email error
        if (/^\S+@\S+\.\S+$/.test(email)) {

            setEmail(email)
            setEmailError('')
        }
        else if (email === '') {
            setEmail('')
            setEmailError('Email is required')
        }
        else {
            setEmail('')
            setEmailError('Invalid Email')
        }

        // handle password error
        if (password === '') {
            setPassword('')
            setpasswordError('Password is required')
        }
        else if (password.length < 6) {
            setPassword('')
            setpasswordError('Password is too short')
        }
        else {
            setPassword(password)
            setpasswordError('')
        }

        // handle match password
        if (confirmPassword === '') {
            return;
        }
        if (confirmPassword === password) {
            setconfirmPasswordError(confirmPassword)
            setconfirmPasswordError('')
        }
        else {
            setConfirmPassword('')
            setconfirmPasswordError('Password did not match')

        }
    }
    return (
        <div className='register-container'>
            <div className="register-img">
                <h1>Image here</h1>
            </div>


            <div className="reg-form-container">
                <form onSubmit={submitResgisterForm} className='register-form' >
                    <h1 className='text-center text-4xl'>Please Register</h1>

                    <div className='flex justify-between w-full'>
                        <input className='short-input' type="text" placeholder='First Name' />
                        <input className='short-input' type="text" placeholder='Last Name' />
                    </div>
                    <input className='w-full' name='email' type="text" placeholder='Email' />
                    <div className='flex justify-between w-full'>
                        <input className='short-input' name='password' type="text" placeholder='Password' />
                        <input className='short-input' name='confirmPassword' type="text" placeholder='Confirm Password' />
                    </div>
                    <input className='w-full' name='email' type="text" placeholder='Address' />
                    <div className='flex justify-between w-full'>
                        <input className='short-input' name='Age' type="text" placeholder='Age' />
                        <select className='short-input' name="gender" id="gender">
                            <option value="Gender">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='flex justify-between w-full'>
                        <select className='short-input' name="role" id="role">
                            <option value="Gender">Role</option>
                            <option value="Male">HR Manager</option>
                            <option value="Female">CEO</option>
                            <option value="Female">Employee</option>
                            <option value="Female">Deapartment Head</option>
                        </select>
                        <input className='short-input' name='number' type="text" placeholder='Phone number' />
                    </div>
                    <input className='checkbox' type="checkbox" name="term-condition" /><p>Accept our term</p>
                    <button className='register-button' type='submit'>Register Now</button>
                </form>
            </div>
        </div>
    );
};

export default Register;