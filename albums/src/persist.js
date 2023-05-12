import { useState, useEffect } from "react";

export default function usePState(defaultVal, id) {
  // TODO: Clear session storage on logout.
  if (id === undefined) console.error("Warning in usePState: id wasn't given");

  const [val, setVal] = useState(() => {
    const saved = window.sessionStorage.getItem(id);
    return JSON.parse(saved) || defaultVal;
  });
  useEffect(() => {
    window.sessionStorage.setItem(id, JSON.stringify(val));
  }, [val]);

  return [val, setVal];
}
