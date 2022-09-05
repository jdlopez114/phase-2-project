import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    const NavBar = 
    <div className='navbar'>
      <NavLink exact to="/" style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#ff3c78',
        }
      : { color: '#a0a0a0' }
  }> Home Page </NavLink>
      <NavLink exact to="/human" style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#ff3c78',
        }
      : { color: '#a0a0a0' }
  }> Human </NavLink>
      <NavLink exact to="/alien" style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#ff3c78',
        }
      : { color: '#a0a0a0' }
  }> Alien </NavLink>
      <NavLink exact to="/form" style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#ff3c78',
        }
      : { color: '#a0a0a0' }
  }> Custom </NavLink>
    </div>
  
    return <div>{NavBar}</div>;
  }
  
  export default NavBar;