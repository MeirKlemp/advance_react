import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Info() {
  const { user } = useContext(UserContext);

  return (
    <div>
      <h1>Info</h1>
      <h2>{`hello ${user.name} welcome! your id is ${user.id}`}</h2>
    </div>
  );
}
