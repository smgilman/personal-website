import React from 'react';
import { Link } from 'react-router-dom';
import { CiHome, CiFolderOn } from "react-icons/ci";
import '../styles/global.css';

function Header() {
    return (
        <header className='header'>
            <nav>
                <Link to="/"><CiHome /><span>Home</span></Link>
                <Link to="/projects"><CiFolderOn /><span>Projects</span></Link>
            </nav>
        </header>
    );
}

export default Header;