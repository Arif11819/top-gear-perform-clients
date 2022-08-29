import React, { useEffect, useState } from 'react';
import ScrollToBottom from 'react-scroll-to-bottom'
import './chats.css'

const Chats = ({ socket, userName, room }) => {
    const [currentMessage, setCurrentMessage] = useState('')
    const [messageList, setMessageList] = useState([]);
    const sendMessage = async () => {
        if (currentMessage !== '') {
            const msgData = {
                room: room,
                author: userName,
                message: currentMessage,
                time: new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes()
            }
            await socket.emit("send_message", msgData)
            setMessageList((list) => [...list, msgData]);
            setCurrentMessage("")
        }
    }
    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageList((list) => [...list, data]);
        })
    }, [socket])
    return (
        <div className='chat-window container shadow-xl'>
            <div className='chat-header'>
                <p className='m-0 block p-2'> Chat for us!</p>
            </div>
            <div className='chat-body'>
                <ScrollToBottom className="message-container">
                    {
                        messageList.map((messageContent) => {
                            return <div className='message' id={userName === messageContent.author ? "you" : "other"}>
                                <div>
                                    <div className='message-content'>
                                        <p>{messageContent.message}</p>
                                    </div>
                                    <div className='message-meta'>
                                        <p id='time'>{messageContent.time}</p>
                                        <p id='author'>{messageContent.author}</p>
                                    </div>
                                </div>
                            </div>
                        })
                    }
                </ScrollToBottom>
            </div>
            <div className='chat-footer shadow-xl border'>
                <input type="text" value={currentMessage} placeholder='Type your message...' onChange={(e) => { setCurrentMessage(e.target.value) }}
                    onKeyPress={(e) => { e.key === "Enter" && sendMessage() }}
                />
                <button onClick={sendMessage}>&#9658;</button>
            </div>
        </div>
    );
};

export default Chats;