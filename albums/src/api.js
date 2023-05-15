import { useState, useEffect } from "react";

export function useResource(resource) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (resource) {
      const controller = new AbortController();

      getCached(resource, controller.signal)
        .then((json) => setData(json))
        .catch((err) => {
          // Ignore abort errors because they don't matter.
          if (err.name !== "AbortError") {
            setError(err);
          }
        });

      return () => controller.abort();
    }
  }, [resource]);

  useEffect(() => {
    if (data && resource) {
      window.localStorage.setItem(resource, JSON.stringify(data));
    }
  }, [data, resource]);

  if (error) {
    throw error;
  }

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

async function getCached(resource, signal) {
  const cached = window.localStorage.getItem(resource);
  if (cached) {
    return JSON.parse(cached);
  } else {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/" + resource,
      {
        signal: signal,
      }
    );
    const text = await response.text();
    window.localStorage.setItem(resource, text);
    return JSON.parse(text);
  }
}
