import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {

    const selected = {
      color: '#fff',
      background: '#ff3c78',
      borderRadius: '22px',
      padding: '10px'
    }

    const notSelected ={ 
      color: '#a0a0a0' 
    }

    const NavBar = 
    <div className='navbar'>
      <NavLink exact="true" to="/" style={({ isActive }) => isActive ? selected: notSelected }> Home Page </NavLink>
      <NavLink exact="true" to="/human" style={({ isActive }) => isActive ? selected : notSelected}> Human </NavLink>
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