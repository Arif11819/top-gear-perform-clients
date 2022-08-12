import { useEffect, useState } from "react"

const useReviewDetails = reviewsId => {
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        const url = `https://young-ocean-85712.herokuapp.com/reviews/${reviewsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [reviewsId]);
    return [reviews, setReviews];
}
export default useReviewDetails;