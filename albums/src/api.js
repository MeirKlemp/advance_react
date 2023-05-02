import { useState, useEffect } from "react";

export default function useApi(resource) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (resource) {
      fetch("https://jsonplaceholder.typicode.com/" + resource)
        .then(response => response.json())
        .then(json => setData(json));
    }
  }, [resource]);

  return data;
}
