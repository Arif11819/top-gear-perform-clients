import { useEffect, useState } from "react"

const useEmployee = () => {
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/employee';

        fetch(url)
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [])
    return [employee, setEmployee];
}
export default useEmployee;