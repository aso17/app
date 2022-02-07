import React from "react";
import "../componenNavbar/Navbar.css";
const Navbar = () => {
  return (
    <div className="Navbar">
      <a href={"/"}>Home</a>
      <a href={"/users"}>Users</a>
      <a href={"/asset"}>Asset</a>
      <a href={"/Manage"}>Managemant</a>
    </div>
  );
};

export default Navbar;
