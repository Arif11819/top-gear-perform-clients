import { useEffect, useState } from "react";

const useDisplays = () => {
  const [displays, setDisplays] = useState([]);

  useEffect(() => {

    fetch('https://top-gear-perform-server.vercel.app/emgcontact')
      .then(res => res.json())
      .then(data => setDisplays(data));
  }, []);
  return [displays, setDisplays]
}

export default useDisplays;