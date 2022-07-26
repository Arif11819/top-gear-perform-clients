import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import auth from '../../../../../firebase.init';

const NoteList = () => {
    const [user] = useAuthState(auth);
    const { data: notes, isLoading, refetch } = useQuery('taskList', () => fetch(`https://top-gear-perform-server.up.railway.app/notes/${user?.email}`, {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <p>Loading...</p>
    }
    return (
        <div className='pl-16'>
            {
                notes.map(note => <div className='p-2' key={note._id}>
                    <ul className='list-disc'>
                        <li>{note.note}</li>
                    </ul>
                </div>)
            }
        </div>
    );
};

export default NoteList;