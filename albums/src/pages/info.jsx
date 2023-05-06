import React from "react";

export default function Info() {
  return (
    <div>
      <h1>Info</h1>
      <h2>{`data about current user:
       ${localStorage.getItem("currentUser")} `}</h2>
    </div>
  );
}
