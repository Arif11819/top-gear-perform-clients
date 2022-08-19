import { useEffect, useState } from "react"

const useChart = () => {
    const [chart, setChart] = useState([]);
    useEffect(() => {
        const url = 'https://dry-ravine-83506.herokuapp.com/employee';

        fetch(url)
            .then(res => res.json())
            .then(data => setChart(data))
    }, [])
    return [chart, setChart];
}
export default useChart;