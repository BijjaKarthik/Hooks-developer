import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-darkposition-fixed danger width-100vw">
      <div className="container-fluid ">
        <h2 className="navbar-brand " to="/">Hooks Frontend</h2>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink className="nav-link" to="/count">Count</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/theme">Theme</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/bgcolor">Background-Color</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/onlinestatus">Online-Status</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/textresizer">Text-Resizer</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/battery">Battery-Counter</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar