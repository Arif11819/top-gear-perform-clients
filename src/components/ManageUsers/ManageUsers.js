import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';



const ManageUsers = () => {

    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://dry-ravine-83506.herokuapp.com/users`)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users]);

    const handleDeleteUser = id => {

        const url = `https://dry-ravine-83506.herokuapp.com/users/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    const remaining = users.filter(user => user._id !== id);
                    setUsers(remaining)
                }
                toast.error('Successfully Deleted  ')
                console.log(data);

            })
    }
    return (
        <div className="overflow-x-auto">
            <h1 className='text-3xl mb-4 mt-5  text-center font-bold text-black'>Manage All of Our Users</h1>
            <table className="table mx-auto">

                <thead>
                    <tr>

                        <th>Name</th>
                        <th>Company</th>
                        <th>Role</th>
                        <th>Email</th>
                        <th>Delete User</th>

                    </tr>
                </thead>
                <tbody>

                    {users.map(user => <tr key={user._id}>
                        <td>{user.fullName
                        }</td>
                        <td>{user.company}</td>
                        <td>{user.userRole}</td>
                        <td>{user.userEmail}</td>

                        <td><button onClick={() => handleDeleteUser(user._id)} className='text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-3 py-1 text-center'> Delete</button></td>

                    </tr>)}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;