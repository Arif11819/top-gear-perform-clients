import React from 'react';
import { BsCalendarMinus, BsFillCheckCircleFill } from 'react-icons/bs';

const EmployeesCard = ({ vacation }) => {
    const handleFeedback = (e) => {
        e.preventDefault();
        const feedbackText = e.target.feedback.value;
        const vacationFeedback = {
            text: feedbackText
        }

        const url = `https://dry-ravine-83506.herokuapp.com/vacationstore/feedback/${vacation?._id}`
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(vacationFeedback)
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                e.target.feedback.value = ''

            })
    }
    return (
        <div>
            <p className='border border-gray-300 mt-3'></p>
            <div className='flex gap-32 p-3'>
                <div className='flex items-center gap-4'>
                    <BsCalendarMinus className='text-3xl text-blue-500' />
                    <div>
                        <h2>{vacation.from} to {vacation.to}</h2>
                        <div className='flex items-center gap-2'>
                            <BsFillCheckCircleFill className='text-blue-500' />
                            <p className='text-slate-600'>{vacation.day} days of {vacation.vacationType}</p>
                        </div>
                        <p>Employees Email: {vacation.email}</p>
                        <p>FeedBack: {vacation.feedback ? vacation.feedback : <span>No feedback</span>}</p>
                    </div>
                </div>
                <div className='w-80'>
                    <p className='text-slate-400'>{vacation.notes}</p>
                </div>
                <div>

                    <div className="collapse">
                        <input type="checkbox" className="peer" />
                        <div className="collapse-title">
                            <button className='btn btn-xs bg-blue-500 border-none'>Add feedback</button>
                        </div>
                        <div className="collapse-content">
                            <div className='flex flex-col justify-end gap-4'>
                                <form className='flex gap-3' onSubmit={handleFeedback}>
                                    <input className='p-3 border' type="text" name="feedback" placeholder='Write feedback...' />
                                    <input type='submit' className='btn btn-xs btn-success text-white' value="Give Feedback" />
                                </form>
                            </div>
                        </div>
                    </div>


                </div>

            </div>
            <p className='border border-gray-300 mt-3'></p>
        </div>
    );
};

export default EmployeesCard;