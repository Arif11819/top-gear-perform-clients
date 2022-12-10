
import { useEffect, useState } from "react";




const useCourse = () => {
    const [productItems, setProductItems] = useState([]);

    useEffect(() => {
        fetch(`https://top-gear-perform-server.vercel.app/course`)
            .then(res => res.json())
            .then(data => setProductItems(data))

    }, [])
    return [productItems, setProductItems]
};

export default useCourse;