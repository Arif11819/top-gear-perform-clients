import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const ManageBookData = ({ ebook }) => {
    console.log(ebook)
    const [ebooks, setEbooks] = useState([]);
    useEffect(() => {
        fetch(`https://top-gear-perform-server.up.railway.app/ebook`)
            .then(res => res.json())
            .then(data => setEbooks(data))
    }, []);

    const handleDeleteBook = id => {

        const url = `https://top-gear-perform-server.up.railway.app/ebook/${id}`
        fetch(url, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data.deleteCount > 0) {
                    const remaining = ebooks.filter(ebook => ebook._id !== id);
                    setEbooks(remaining)
                }
                toast.error('Book has been removed  ')
                console.log(data);

            })
    };

    return (
        <div className=" ">
            <div className="card  shadow-xl ebookcard">
                <figure className="px-20 pt-10">
                    <img
                        src={ebook.image}
                        alt="book pic"
                        className=""
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-sm ">{ebook.name}</h2>
                    <p className=" book-description">{ebook.description}</p>
                    <div className="card-actions">
                        <button onClick={() => handleDeleteBook(ebook._id)} className="px-3 py-1 border border-red-300 relative rounded group overflow-hidden font-medium bg-red-50 text-red-600 inline-block">
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-red-500 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Remove Book</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageBookData;