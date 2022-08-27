import { useEffect, useState } from "react"

const useEmployeeOne = employeeId => {
    const [employeeOne, setEmployeeOne] = useState({});

    useEffect(() => {
        const url = `https://dry-ravine-83506.herokuapp.com/employee/${employeeId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setEmployeeOne(data))

    }, [employeeId]);
    return [employeeOne, setEmployeeOne];
}
export default useEmployeeOne;