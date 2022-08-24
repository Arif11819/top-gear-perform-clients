import { useEffect, useState } from "react";

const useDisplays = () =>{
  const [displays, setDisplays] = useState([]);

  useEffect ( ()=>{
    
      fetch('http://localhost:5000/emgcontact')
      .then(res => res.json())
      .then (data => setDisplays(data));
  }, []);
  return [displays, setDisplays]
}

export default useDisplays;