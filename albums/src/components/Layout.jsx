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
      <div style={{ display: "flex", alignItems: "center" }}>
        <Header style={{ display: "inline-block" }} />
        <h2 style={{ display: "inline-block", marginLeft: "10px" }}>
          {`hello ${user.name} welcome! your id is ${user.id}`}
        </h2>
      </div>
      <Outlet />
      <Footer />
    </>
  );
}
