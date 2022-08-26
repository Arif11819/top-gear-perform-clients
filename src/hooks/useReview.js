import { useEffect, useState } from "react"

const useReview = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        const url = 'https://dry-ravine-83506.herokuapp.com/users';

        fetch(url)
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [users])
    return [users, setUsers];
}
export default useReview;