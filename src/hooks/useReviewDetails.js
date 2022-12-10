import { useEffect, useState } from "react"

const useReviewDetails = reviewsId => {
    const [reviews, setReviews] = useState({});

    useEffect(() => {
        const url = `https://top-gear-perform-server.vercel.app/reviews/${reviewsId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setReviews(data))

    }, [reviewsId]);
    return [reviews, setReviews];
}
export default useReviewDetails;