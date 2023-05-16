import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { useContext } from "react";
import { UserContext } from "../App";

export default function Layout() {
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="header-container">
        <Header style={{ display: "inline-block" }} />
        {user && (
          <h2
            style={{
              display: "inline-block",
              marginLeft: "10px",
              color: "#333",
              fontFamily: "Open Sans, sans-serif",
              fontWeight: "bold",
              fontSize: "1.5em",
              backgroundColor: "#f7f7f7",
              padding: "0.5em 1em",
              border: "2px solid #ccc",
              borderRadius: "10px",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
              lineHeight: "1.2",
            }}
          >
            {`Welcome ${user.name}, your ID is ${user.id}`}
          </h2>
        )}
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
