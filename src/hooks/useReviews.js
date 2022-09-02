import { useEffect, useState } from "react"

const useReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        const url = 'https://dry-ravine-83506.herokuapp.com/reviews';

        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [reviews])
    return [reviews, setReviews];
}
export default useReviews;