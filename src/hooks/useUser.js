import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../firebase.init';

const useUser = () => {
    const [user] = useAuthState(auth)
    const userEmail = user?.email
    const [singleUser, setUser] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/user/${userEmail}`)
            .then(res => res.json())
            .then(data => {
                if (data) {
                    setUser(data)
                }
            })


    }, [userEmail])
    return [singleUser]
};

export default useUser;