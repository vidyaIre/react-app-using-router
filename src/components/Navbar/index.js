import React from 'react';
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#007bff" }}>
            <div className="container">
                <NavLink className="navbar-brand text-white" to="/">MyApp</NavLink>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/about" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link text-white" to="/user/1" style={({ isActive }) => ({ fontWeight: isActive ? "bold" : "normal" })}>User</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}

export default Navbar