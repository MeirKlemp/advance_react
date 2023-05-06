import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Error() {
  const { user } = useContext(UserContext);
  const message = user ? "You are logged in" : "You are not logged in";
  return (
    <div>
      <h1>Error</h1>
      <p>{message}</p>
    </div>
  );
}
