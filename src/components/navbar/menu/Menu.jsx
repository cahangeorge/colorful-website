import React from 'react';
import './menu.scss';

export default function Menu({ menuOpen, setMenuOpen }) {
    return (
        <div className={'menu me-4 col-6 ' + (menuOpen && 'active')}>
            <ul className='list-unstyled'>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="/">Home</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#about">About</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#portofolio">Portofolio</a>
                </li>
                <li onClick={() => setMenuOpen(false)}>
                    <a href="#contact">Contact</a>
                </li>
            </ul>
        </div>
    )
}
