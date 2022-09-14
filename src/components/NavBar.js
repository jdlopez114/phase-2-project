import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    const NavBar = 
    <div className='navbar'>
      <NavLink exact="true" to="/" style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#ff3c78',
          borderRadius: '22px',
          padding: '10px',
        }
      : { color: '#a0a0a0' }
  }> Home Page </NavLink>
      <NavLink exact="true" to="/human" style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#ff3c78',
          borderRadius: '22px',
          padding: '10px',
        }
      : { color: '#a0a0a0' }
  }> Human </NavLink>
      <NavLink exact="true" to="/alien" style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#ff3c78',
          borderRadius: '22px',
          padding: '10px',
        }
      : { color: '#a0a0a0' }
  }> Alien </NavLink>
      <NavLink exact="true" to="/form" style={({ isActive }) =>
    isActive
      ? {
          color: '#fff',
          background: '#ff3c78',
          borderRadius: '22px',
          padding: '10px',
        }
      : { color: '#a0a0a0' }
  }> Custom </NavLink>
    </div>
  
    return <div>{NavBar}</div>;
  }
  
  export default NavBar;