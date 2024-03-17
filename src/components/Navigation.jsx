import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Navigation() {
    const currentPage = useLocation().pathname;
    return (
        <div>
            <ul className="nav nav-tabs">
                <li className="nav-item">
                    <Link to="/" className={currentPage === '/' ? 'nav-link active' : 'nav-link'}>About Me</Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}>Portfolio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}>Contact</Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume" className={currentPage === '/Resume' ? 'nav-link active' : 'nav-link'}>Resume</Link>
                </li>
            </ul>
        </div>
    );
}

export default Navigation;