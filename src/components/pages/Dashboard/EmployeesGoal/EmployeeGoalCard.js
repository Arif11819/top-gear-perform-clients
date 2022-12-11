import React from 'react';

const EmployeeGoalCard = ({ employeegoal }) => {
    const handleFeedback = (e) => {
        e.preventDefault();
        const feedbackText = e.target.feedback.value;
        const vacationFeedback = {
            text: feedbackText
        }

        const url = `https://top-gear-perform-server.up.railway.app/usergoal/feedback/${employeegoal?._id}`
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
            <div className='bg-sky-100 p-4 border-b-2 border-r-2 border-blue-400 shadow-lg shadow-blue-200 rounded-md'>
                <p className='text-xl font-bold text-center mb-2 border border-blue-400 p-2 rounded-md'>{employeegoal.form.goalName}</p>
                <h2 className='font-bold'>Category: {employeegoal.form.goalCat}</h2>
                <h2 className='font-bold text-sm my-2'>Units: {employeegoal.form.unit}</h2>
                <h2 className='font-bold'>Target: {employeegoal.form.target}</h2>
                <p>Employee Email: {employeegoal.user}</p>
                <div className='flex justify-start gap-3 my-3'>
                    <p>From:</p>
                    <p className='font-bold'>{employeegoal.form.from},</p>
                    <p>To:</p>
                    <p className='font-bold'>{employeegoal.form.to}</p>
                </div>
                <p>Description: <span className='text-slate-500'>{employeegoal.form.goalDes}</span></p>
                <p>FeedBack: {employeegoal.feedback ? employeegoal.feedback : <span>No feedback</span>}</p>
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
    );
};

export default EmployeeGoalCard;