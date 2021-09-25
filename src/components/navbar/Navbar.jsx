import React from 'react';
import './navbar.scss';
import logo from '../../biolos-code-logo.png';
import Menu from './menu/Menu';

export default function Navbar({ menuOpen, setMenuOpen }) {
    return (
        <div className={'navigation position-fixed shadow ' + (menuOpen && 'active')}>
            <a href="" className='logo ms-4'>
                <img src={logo} alt="" width='75' height='75' />
            </a>
            <Menu className='nav' />
            <div className='hamburger m-0 me-4' onClick={() => setMenuOpen(!menuOpen)}>
                <span className='line1'></span>
                <span className="line2"></span>
                <span className="line3"></span>
            </div>
        </div>
    )
}
