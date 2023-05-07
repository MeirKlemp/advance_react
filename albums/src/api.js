import { useState, useEffect } from "react";

export function useResource(resource) {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (resource) {
      fetch("https://jsonplaceholder.typicode.com/" + resource)
        .then((response) => response.json())
        .then((json) => setData(json));
    }
  }, [resource]);

  return [data, setData];
}

export async function updateResource(resource, updatedObj) {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/" + resource,
    {
      method: "PUT",
      body: JSON.stringify(updatedObj),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    }
  );

  return await response.json();
}
