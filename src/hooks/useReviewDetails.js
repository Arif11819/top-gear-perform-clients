import { useEffect, useState } from "react"

const useReviewDetails = reviewsId => {
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        const url = `https://dry-ravine-83506.herokuapp.com/reviews/${reviewsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [reviewsId]);
    return [reviews, setReviews];
}
export default useReviewDetails;