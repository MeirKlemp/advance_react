import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Error() {
  const { user } = useContext(UserContext);
  return (
    <div>
      <h1>Error</h1>
    </div>
  );
}
