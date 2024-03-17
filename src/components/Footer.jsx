import React from "react";
import {FaGithub, FaLinkedin, FaDiscord} from 'react-icons/fa';

function Footer() {
    return (
        <footer>
            <div className='footer'>
                <a href='https://github.com/EowynStark' target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href='https://www.linkedin.com/in/andria-jean-185003290' target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href='https://discord.com/eowynstark' target="_blank" rel="noopener noreferrer"><FaDiscord /></a>
            </div>
        </footer>
    );
}

export default Footer;