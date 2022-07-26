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
        if(confirmPassword === ''){
            return;
        }
        if(confirmPassword === password){
            setconfirmPasswordError(confirmPassword)
            setconfirmPasswordError('')
        }
        else{
        setConfirmPassword('')
        setconfirmPasswordError('Password did not match')
        }
    }
    return (
        <div className='register-container'>
            <form onSubmit={submitResgisterForm} className='register-form' >
                {emailError && <small>{emailError}</small>}
                <input name='email' type="text" placeholder='Email' />
                {passwordError && <small>{passwordError}</small>}
                <input name='password' type="text" placeholder='Password' />
                {confirmPasswordError && <small>{confirmPasswordError}</small>}
                <input name='confirmPassword' type="text" placeholder='Confirm Password' />
                <button type='submit'>Register Now</button>

            </form>
        </div>
    );
};

export default Register;