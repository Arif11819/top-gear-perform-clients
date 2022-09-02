import { useEffect, useState } from "react"

const useManager = user => {
    const [manager, setManager] = useState(false);
    const [managerLoading, setManagerLoading] = useState(true)
    useEffect(() => {
        const email = user?.email;
        if (email) {
            fetch(`https://dry-ravine-83506.herokuapp.com/manager/${email}`, {
                method: 'GET',
                headers: {
                    'content-type': 'application/json',
                }
            })
                .then(res => res.json())
                .then(data => {
                    setManager(data.manager)
                    setManagerLoading(false);
                })
        }
    }, [user])
    return [manager, managerLoading]
}
export default useManager;