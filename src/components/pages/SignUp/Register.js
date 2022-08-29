import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'
import auth from '../../../firebase.init'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { TiWarning } from 'react-icons/ti'
import Loading from './Loading/Loading';
import { toast } from 'react-toastify';


const Register = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [role, setrole] = useState('')
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    // error state
    const [emailError, setEmailError] = useState('')
    const [passwordError, setpasswordError] = useState('')
    const [confirmPasswordError, setconfirmPasswordError] = useState('')
    const [ageError, setAgeError] = useState('')
    const [genderError, setGenderError] = useState('')
    const [roleError, setroleError] = useState('')

    const navigate = useNavigate()


    const handleEmail = email => {

        if (/^\S+@\S+\.\S+$/.test(email)) {

            setEmail(email)
            setEmailError('')
        }

        else {
            setEmail('')
            setEmailError('Invalid Email')
        }
    }
    const handlePassword = password => {

        if (password.length < 6) {
            setPassword('')
            setpasswordError('Password is too short')
        }
        else {
            setPassword(password)
            setpasswordError('')
        }
    }

    const handleConfirmPassword = confirmPassword => {

        if (password === confirmPassword) {
            setConfirmPassword(confirmPassword)
            setconfirmPasswordError('')
        }
        else {
            setConfirmPassword('')
            setconfirmPasswordError('Password did not match')
        }
    }

    const handleAge = age => {
        if (age > 100 || age < 0) {
            setAge('')
            setAgeError('Invalid age')
        }
        else {
            setAge(age)
            setAgeError('')
        }
    }
    const handleRole = role => {
        if (role === 'Role') {
            setrole('')
            setroleError('Please select your role')
        }
        else {
            setrole(role)
            setroleError('')
        }
    }
    const handleGender = gender => {
        if (gender === 'Gender') {
            setGender('')
            setGenderError('Please select your gender')
        }
        else {
            setGender(gender)
            setGenderError('')
        }
    }


    const submitResgisterForm = (event) => {
        event.preventDefault()

        const firstName = event.target.firstName.value
        const lastName = event.target.lastName.value
        const fullName = `${firstName} ${lastName}`
        const userEmail = email
        const userAddress = event.target.address.value
        const userAge = event.target.age.value
        const userGender = event.target.gender.value
        const userRole = event.target.role.value
        const userPhoneNumber = event.target.phoneNumber.value

        const userData = { firstName, lastName, fullName, userEmail, userAddress, userAge, userGender, userRole, userPhoneNumber }

        if (role === '') {
            setroleError('Please select your role')
            return;
        }
        if (gender === '') {
            setGenderError('Please select your gender')
            return;
        }

        // creating new user here

        if (email && password && confirmPassword && role && age && gender) {

            createUserWithEmailAndPassword(email, password)
            fetch('https://dry-ravine-83506.herokuapp.com/users', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(userData)

            })
                .then((data) => {
                    if (data.status === 200) {
                        toast.success('Register successfull')
                    }
                })
          
        }
    }
    if (user) {
        navigate('/dashboard/home')
        toast.success('Register successfull',{toastId:'register'})
    }

    return (
        <div className='register-container'>
            <div className="register-img">
                <img src="https://i.ibb.co/WD9s7s8/Mobile-login-bro.png" alt="" />
                <h1 className='text-4xl'>Hey welcome <br /> Looks like you are new here !</h1>
            </div>


            <div className="reg-form-container">
                <form onSubmit={submitResgisterForm} className='register-form' >
                    <h1 className='reg-title'>Please Register</h1>

                    <div className='flex justify-between w-full'>
                        <input autoComplete='off' name='firstName' required className='short-input' type="text" placeholder='First Name' />
                        <input autoComplete='off' name='lastName' required className='short-input' type="text" placeholder='Last Name' />
                    </div>
                    <input autoComplete='off' onBlur={(e) => handleEmail(e.target.value)} required className='w-full' name='email' type="text" placeholder='Email' />

                    <div className='flex justify-between w-full'>
                        <input autoComplete='off' onBlur={(e) => handlePassword(e.target.value)} required className='short-input' name='password' type="password" placeholder='Password' />
                        <input autoComplete='off' onBlur={(e) => handleConfirmPassword(e.target.value)} required className='short-input' name='confirmPassword' type="password" placeholder='Confirm Password' />
                    </div>
                    <input autoComplete='off' required className='w-full' name='address' type="text" placeholder='Address' />
                    <div className='flex justify-between w-full'>
                        <input autoComplete='off' onBlur={(e) => handleAge(e.target.value)} required className='short-input' name='age' type="number" placeholder='Age' />
                        <select onBlur={(e) => handleGender(e.target.value)} required className='short-input' name="gender" id="gender">
                            <option value="Gender">Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </div>
                    <div className='flex justify-between w-full'>
                        <select onBlur={(e) => handleRole(e.target.value)} required className='short-input' name="role" id="role">
                            <option value="Role">Role</option>
                            <option value="HR Manager">HR Manager</option>
                            <option value="CEO">CEO</option>
                            <option value="Employee">Employee</option>
                            <option value="Deapartment Head">Deapartment Head</option>
                        </select>
                        <input autoComplete='off' required className='short-input' name='phoneNumber' type="number" placeholder='Phone number' />
                    </div>
                    <label className='flex'>
                        <input autoComplete='off' required name='checkBox' type="checkbox" />
                        <p> Accept our <Link className='term-link' to='/terms'> terms and condition</Link></p>
                    </label>
                    {emailError && <div className='error-container'>
                        <p className='error-message'><TiWarning className='warning-icon' />{emailError}</p>
                    </div>}
                    {passwordError && <div className='error-container'>
                        <p className='error-message'><TiWarning className='warning-icon' /> {passwordError}</p>
                    </div>}
                    {confirmPasswordError && <div className='error-container'>
                        <p className='error-message'><TiWarning className='warning-icon' /> {confirmPasswordError}</p>
                    </div>}
                    {ageError && <div className='error-container'>
                        <p className='error-message'><TiWarning className='warning-icon' /> {ageError}</p>
                    </div>}
                    {roleError && <div className='error-container'>
                        <p className='error-message'><TiWarning className='warning-icon' /> {roleError}</p>
                    </div>}
                    {genderError && <div className='error-container'>
                        <p className='error-message'><TiWarning className='warning-icon' /> {genderError}</p>
                    </div>}
                    {error && <div className='error-container'>
                        <p className='error-message'><TiWarning className='warning-icon' />Email already exist</p>
                    </div>}
                   
                    <button disabled={loading} type='submit' className='register-button '>
                        {loading ? <Loading /> : <span>Sign Up</span>}
                    </button>

                </form>
            </div>
        </div>
    );
};

export default Register;