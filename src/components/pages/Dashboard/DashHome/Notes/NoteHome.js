import React from 'react';
import NoteList from './NoteList';
import Notes from './Notes';

const NoteHome = () => {
    return (
        <div>
            <Notes />
            <NoteList />
        </div>
    );
};

export default NoteHome;