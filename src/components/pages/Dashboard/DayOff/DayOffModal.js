import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../../firebase.init';

const DayOffModal = ({ vacations, setOpenModal }) => {
    const [user] = useAuthState(auth);
    const [from, setFrom] = useState('')
    const [to, setTo] = useState('')
    const [days, setDays] = useState(0)
    const [dayOffType, setDayOffType] = useState("Vacation")
    const [notes, setNotes] = useState('')
    const [singleVacation, setSingleVacation] = useState({})
    const handleDays = () => {
        const fromDate = new Date(from);
        const toDate = new Date(to);
        const time = Math.abs(toDate - fromDate);
        const day = Math.ceil(time / (1000 * 60 * 60 * 24))
        setDays(day)

    }


    const fromDate = new Date(from);
    const toDate = new Date(to);
    const time = Math.abs(toDate - fromDate);
    const day = Math.ceil(time / (1000 * 60 * 60 * 24))

    const handleSelectChange = e => {
        setDayOffType(e.target.value)
    }

    useEffect(() => {
        fetch(`https://top-gear-perform-server.up.railway.app/namevacation?type=${dayOffType}&email=${user?.email}`)
            .then(res => res.json())
            .then(data => setSingleVacation(data))
    }, [dayOffType, user.email])

    const handleSubmit = () => {
        const count = parseInt(singleVacation.day) - parseInt(day);
        const updateDay = { count, email: user.email }

        const url = `https://top-gear-perform-server.up.railway.app/vacation/${dayOffType}`
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                // headers: {
                //     'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                // }
            },
            body: JSON.stringify(updateDay)
        })
            .then(res => res.json())
            .then(data => {


            })

        const vacationAll = {
            from: from,
            to: to,
            vacationType: dayOffType,
            day: day,
            notes: notes,
            email: user.email
        }
        fetch('https://top-gear-perform-server.up.railway.app/vacationstore', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(vacationAll)
        })
            .then(res => res.json())
            .then(data => {


                setOpenModal(null)
            })

    }

    return (
        <div>
            <input type="checkbox" id="DayOffModal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Record Day Off</h3>
                    <div className='flex items-center gap-2 mt-5 ml-4'>
                        <div>
                            <label htmlFor="date-1">From</label> <br />
                            <input onChange={(e) => setFrom(e.target.value)} className='border px-2 py-1 rounded border-blue-500 text-gray-500' type="date" name="date-1" id="date-1" required />
                        </div>
                        <span className='mt-5'>-</span>
                        <div>
                            <label htmlFor="date-2">To</label> <br />
                            <input onChange={(e) => setTo(e.target.value)} className='border px-2 py-1 rounded border-blue-500 text-gray-500' type="date" name="date-2" id="date-2" required />
                        </div>
                        <button className='text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-1 py-2 text-center cursor-pointer mt-5' onClick={handleDays}>Check days</button>
                    </div>
                    <div className='my-5 ml-4'>
                        <p className='font-bold'>Total rest days: {days} days</p>
                    </div>
                    <div className="mt-5 ml-4">
                        <label htmlFor="vacationType">Day Off Type</label> <br />
                        <select onChange={handleSelectChange} name='vacationType' className="border bg-white px-2 py-1 rounded border-blue-500 w-36">
                            <option value="Vacation">Vacation</option>
                            <option value="Sick">Sick</option>
                        </select>
                    </div>
                    <div className='ml-4 mt-5'>
                        <label htmlFor="note">Note</label> <br />
                        <textarea onChange={(e) => setNotes(e.target.value)} className='border h-48 w-96 border-blue-500 px-2 p-1 rounded' placeholder='Write note...' name="note" id="note"></textarea>
                    </div>
                    <div className="ml-4 mt-5 flex gap-4">
                        <button onClick={handleSubmit} className='text-white bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-3 py-1 text-center cursor-pointer'>Save</button>
                        <label htmlFor="DayOffModal" className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-1 text-center">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DayOffModal;
