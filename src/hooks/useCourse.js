
import { useEffect, useState } from "react";




const useCourse = () => {
    const [productItems, setProductItems] = useState([]);

    useEffect( () =>{
        fetch(`http://localhost:5000/course`)
        .then(res => res.json())
        .then(data => setProductItems(data))

    } ,[])
    return [productItems, setProductItems]
};

export default useCourse;