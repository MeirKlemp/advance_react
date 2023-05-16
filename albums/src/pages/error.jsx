import React from "react";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Error() {
  const { user } = useContext(UserContext);
  const message = user ? "You are logged in" : "You are not logged in";
  return (
    <div className="container">
      <h1>Error</h1>
      <p className="error-msg">{message}</p>
    </div>
  );
}
