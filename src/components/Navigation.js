import React from 'react';
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <nav>
            <ul className="nav-list">
                <li className="nav-item">
                    <NavLink to="/" exact={true} activeClassName="active">About Me</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/portfolio" activeClassName="active">Portfolio</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/contact" activeClassName="active">Contact</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/resume" activeClassName="active">Resume</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navigation;