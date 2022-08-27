import React, { useEffect, useState } from 'react';
import PublishBook from '../PublishBook/PublishBook';
import ManageBookData from './ManageBookData/ManageBookData';

const ManageBook = () => {

    const [ebooks, setEbooks] = useState([]);
    useEffect(() => {
        fetch(`https://dry-ravine-83506.herokuapp.com/ebook`)
            .then(res => res.json())
            .then(data => setEbooks(data))
    }, [ebooks]);
    return (
        <div >
            <PublishBook />
            <h1 className='text-4xl mb-10  text-center font-bold text-black'>Manage Our Published books</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-20 lg:mx-20 lg:px-24 mx-8 px-5'>
                {ebooks.map(book => <ManageBookData key={book._id} ebook={book}></ManageBookData>)}

            </div>
        </div>
    );
};

export default ManageBook;