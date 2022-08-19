import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { BiEdit } from 'react-icons/bi'
import auth from '../../../../../firebase.init';

const Notes = () => {
    const [user] = useAuthState(auth);
    const [text, setText] = useState('')
    const handleTextChange = e => {
        setText(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault();
        const noteText = {
            email: user?.email,
            note: text,
        }
        fetch('https://dry-ravine-83506.herokuapp.com/notes', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(noteText)
        })
            .then(res => res.json())
            .then(data => {
                e.target.note.value = ''

            })
    }
    return (
        <div className='pl-10'>
            <div className="collapse">
                <input type="checkbox" class="peer" />
                <div className="collapse-title">
                    <div className='flex items-center gap-4 text-blue-600 text-lg'>
                        <BiEdit />
                        Add Note
                    </div>
                </div>
                <div className="collapse-content ">
                    <form onSubmit={handleSubmit}>
                        <textarea onChange={handleTextChange} class="textarea mt-3 textarea-bordered" name='note' placeholder="Write notes"></textarea> <br />
                        <input className='p-2 mt-3 bg-blue-500 rounded-md cursor-pointer text-white hover:bg-blue-600' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Notes;
