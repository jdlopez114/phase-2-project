import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    const linkStyles = {
        width: "100px",
        padding: "12px",
        margin: "0 6px 6px",
        background: "blue",
        textDecoration: "none",
        color: "white",
      };

    const NavBar = 
    <div className='navbar'>
      <NavLink exact to="/" style={linkStyles}> Home Page </NavLink>
      <NavLink exact to="/human" style={linkStyles}> Human </NavLink>
      <NavLink exact to="/alien" style={linkStyles}> Alien </NavLink>
      <NavLink exact to="/form" style={linkStyles}> Custom </NavLink>
    </div>
  
    return <div>{NavBar}</div>;
  }
  
  export default NavBar;