import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="navbar glass">
            <div className="navbar-brand">
                <span className="gradient-text">Portfolio</span>
            </div>

            <div className="mobile-menu-icon" onClick={toggleMenu}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
            </div>

            <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                <li><a href="#about" onClick={toggleMenu}>About</a></li>
                <li><a href="#experience" onClick={toggleMenu}>Experience</a></li>
                <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                <li><a href="#contact" onClick={toggleMenu}>Contact</a></li>
            </ul>
        </nav>
    );
};

export default Navbar;
