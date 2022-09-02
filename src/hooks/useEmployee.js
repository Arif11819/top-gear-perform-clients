import { useEffect, useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";

const useEmployee = () => {
    const [user] = useAuthState(auth);
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        const url = `https://dry-ravine-83506.herokuapp.com/employee/${user?.email}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [employee])
    return [employee, setEmployee];
}
export default useEmployee;