import React from "react";
import { NavLink } from 'react-router-dom';
import "../styles.css"

function NavigationBar() {
  return (
    <nav className="clearfix">
      <NavLink to="/home" activeClassName="active">Home</NavLink>
      <NavLink to="/characters" activeClassName="active">Browse Characters</NavLink>
      <NavLink to="/comics" activeClassName="active">Comics</NavLink>
    </nav>
  );
}

export default NavigationBar;