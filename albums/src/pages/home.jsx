import React from "react";
import { Link } from "react-router-dom";
import WelcomeImage from "../assets/images/welcome.png";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={WelcomeImage} alt="social media" />
      </div>
    </div>
  );
}
