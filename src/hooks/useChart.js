import { useEffect, useState } from "react"

const useChart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        const url = 'http://localhost:5000/employee';

        fetch(url)
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return [chart, setChart];
}
export default useChart;