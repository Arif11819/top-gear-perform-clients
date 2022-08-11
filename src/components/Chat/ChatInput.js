import { useState } from 'react'
import io from 'socket.io-client'
import Chats from './Chats';
const socket = io.connect('https://rocky-waters-72967.herokuapp.com');

const ChatInput = () => {
    const [userName, setUserName] = useState("")
    const [room, setRoom] = useState("")
    const [show, setShow] = useState(false);
    const joinRoom = () => {
        if (userName !== "" && room !== "") {
            socket.emit("join_room", room)
            setShow(true)
        }
    }
    return (
        <>
            <div className='w-96 h-[90%] shadow-2xl'>
                {!show ?
                    (
                        <div className='p-10'>
                            <div className='text-center'>
                                <h3 className='text-2xl font-bold my-5'>Chat support</h3>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <input className='p-2 rounded-md border' type="text" name="name" placeholder="Type your name" onChange={(e) => { setUserName(e.target.value) }} />

                                <input className='p-2 rounded-md border' type="email" name="name" placeholder="Type your email" onChange={(e) => { setRoom(e.target.value) }} />

                                <button className='p-2 bg-blue-400 rounded-md text-white' onClick={joinRoom}>Start Chat</button>
                            </div>
                        </div>
                    )
                    :
                    (
                        <Chats socket={socket} userName={userName} room={room} />
                    )}
            </div>
        </>
    );
};

export default ChatInput;