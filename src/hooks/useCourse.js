
import { useEffect, useState } from "react";




const useCourse = () => {
    const [productItems, setProductItems] = useState([]);

    useEffect(() => {
        fetch(`https://dry-ravine-83506.herokuapp.com/course`)
            .then(res => res.json())
            .then(data => setProductItems(data))

    }, [])
    return [productItems, setProductItems]
};

export default useCourse;