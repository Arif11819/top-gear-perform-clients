import { useEffect, useState } from "react"

const useEmployee = () => {
    const [employee, setEmployee] = useState([]);
    useEffect(() => {
        const url = 'https://dry-ravine-83506.herokuapp.com/employee';

        fetch(url)
            .then(res => res.json())
            .then(data => setEmployee(data))
    }, [employee])
    return [employee, setEmployee];
}
export default useEmployee;