import React, { useState } from 'react';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllEmergencies } from './Manage/Constant/EmergencyAction';
import { toast } from 'react-toastify';
const ManageEmergency = () => {

    const { isLoading, emergencies, error } = useSelector(state => state);
    console.log(emergencies)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllEmergencies())

    }, [])

    const [emergenciess, setEmergencies] = useState([]);
    useEffect(() => {
        fetch(`https://dry-ravine-83506.herokuapp.com/emgcontact`)
            .then(res => res.json())
            .then(data => setEmergencies(data))
    }, [emergenciess]);

    const handleDelete = id => {

        const url = `https://dry-ravine-83506.herokuapp.com/emgcontact/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    const remaining = emergenciess.filter(emergency => emergency._id !== id);
                    setEmergencies(remaining)
                }
                toast.error('Successfully Deleted  ')
                console.log(data);

            })
    }

    return (
        <div>

            <h1 className='text-3xl pb-15   text-center font-bold text-black'>Manage All of Our Users Emergency Contacts</h1>
            <section>
                {isLoading && <h4 className='text-blue-500'>Loading....</h4>}
                {error && <h4 className='text-red-500'>{error.message}</h4>}
                {emergencies && emergencies.map((emergency) => {
                    return <table className="table mx-auto">

                        <thead>
                            <tr>

                                <th>Name</th>
                                <th>Relationship</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Delete</th>

                            </tr>
                        </thead>
                        <tbody>

                            {emergencies.map(emergency => <tr key={emergency._id}>
                                <td>{emergency.name
                                }</td>
                                <td>{emergency.relationship}</td>
                                <td>{emergency.email}</td>
                                <td>{emergency.phoneNumberone
                                }</td>
                                <td><button onClick={() => handleDelete(emergency._id)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-1 text-center'> Delete</button></td>


                            </tr>)}
                        </tbody>
                    </table>
                })}
            </section>
        </div>
    );
};

export default ManageEmergency;