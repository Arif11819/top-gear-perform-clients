import { useEffect, useState } from "react"

const useEmployeeOne = employeeId => {
    const [employeeOne, setEmployeeOne] = useState({});

    useEffect(() => {
        const url = `https://top-gear-perform-server.vercel.app/employee/${employeeId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setEmployeeOne(data))

    }, [employeeId]);
    return [employeeOne, setEmployeeOne];
}
export default useEmployeeOne;