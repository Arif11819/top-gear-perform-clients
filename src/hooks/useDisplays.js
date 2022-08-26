import { useEffect, useState } from "react";

const useDisplays = () => {
  const [displays, setDisplays] = useState([]);

  useEffect(() => {

    fetch('https://dry-ravine-83506.herokuapp.com/emgcontact')
      .then(res => res.json())
      .then(data => setDisplays(data));
  }, []);
  return [displays, setDisplays]
}

export default useDisplays;