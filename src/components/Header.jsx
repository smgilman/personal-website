import React from 'react';
import '../styles/global.css';
import { CiHome, CiUser, CiFolderOn } from "react-icons/ci";
import About from '../pages/About';
import Projects from '../pages/Projects';

function Header() {
    return (
        <header className='header'>
            <nav>
                <a href='#home'><CiHome />Home</a>
                <a href='#about'><CiUser />About</a>
                <a href='#projects'><CiFolderOn />Projects</a>
            </nav>
        </header>
    );
}

export default Header;