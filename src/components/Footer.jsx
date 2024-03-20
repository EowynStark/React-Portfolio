import React from "react";
import {FaGithub, FaLinkedin} from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className='p-3 mb-2 bg-warning text-dark'>
                <a href='https://github.com/EowynStark' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href='https://www.linkedin.com/in/andria-jean-185003290' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
            </div>
        </footer>
    );
}

export default Footer;