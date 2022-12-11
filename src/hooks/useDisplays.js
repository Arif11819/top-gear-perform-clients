import { useEffect, useState } from "react";

const useDisplays = () => {
  const [displays, setDisplays] = useState([]);

  useEffect(() => {

    fetch('https://top-gear-perform-server.up.railway.app/emgcontact')
      .then(res => res.json())
      .then(data => setDisplays(data));
  }, []);
  return [displays, setDisplays]
}

export default useDisplays;