import { useEffect, useState } from "react"

const useChartOne = chartId => {
    const [chartOne, setChartOne] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/employee/${chartId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setChartOne(data))

    }, [chartId]);
    return [chartOne, setChartOne];
}
export default useChartOne;