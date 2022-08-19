import React from 'react';
import { useQuery } from 'react-query';

const NoteList = () => {
    const { data: notes, isLoading, refetch } = useQuery('taskList', () => fetch('http://localhost:5000/notes', {
        method: 'GET',
    })
        .then(res => res.json()))
    refetch()
    if (isLoading) {
        return <p>Loding...</p>
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