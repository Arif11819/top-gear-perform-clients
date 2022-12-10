import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AiFillDelete } from 'react-icons/ai'
import { toast } from 'react-toastify';
import { getChatRequest } from '../../../context/actions/chatRequestAction';

const ChatRequest = () => {
    const { isLoading, chatRequest, error } = useSelector((state) => state);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getChatRequest())
    }, [dispatch])
    const handleDelete = (id) => {
        const url = `https://top-gear-perform-server.vercel.app/chatuser/${id}`
        fetch(url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                toast("Successfully deleted")
            })
    }
    return (
        <div>
            {isLoading && <p>Loading...</p>}
            {error && <p>{error.message}</p>}
            <h2 className='text-2xl text-center text-blue-500 my-5 font-bold'>Chat Request</h2>
            <div className='grid grid-cols-4 gap-3 mx-4'>
                {chatRequest && chatRequest?.reverse().map(chatUser => <div key={chatUser._id}>
                    <div className="border border-blue-500 rounded-md p-6 flex justify-between items-center">
                        <div>
                            <p>Name: {chatUser?.userName}</p>
                            <p>Email: {chatUser?.email}</p>
                        </div>
                        <button onClick={() => handleDelete(chatUser._id)}>
                            <AiFillDelete className='text-2xl text-red-500' />
                        </button>
                    </div>
                </div>)}
            </div>
        </div>
    );
};

export default ChatRequest;