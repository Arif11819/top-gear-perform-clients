import { useEffect, useState } from "react"

const useChartOne = chartId => {
    const [chartOne, setChartOne] = useState({});

    useEffect(() => {
        const url = `https://dry-ravine-83506.herokuapp.com/employee/${chartId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setChartOne(data))

    }, [chartId]);
    return [chartOne, setChartOne];
}
export default useChartOne;