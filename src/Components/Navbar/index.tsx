import React from 'react';
import { INavbar } from '../../Helpers/types';
import "./Navbar.css";

const Navbar = ({toggle}: INavbar) => {

    return (
        <nav className="nav nav__white">
            <div>
                <img className="nav__logo" src="./images/logo.png" alt="Hafidz IT Logo" />
            </div>
            
            <div className="nav__menu">
                <div className="humberger" onClick={toggle}>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
                </div>
                <ul>
                    <li><a href="#/">Beranda</a></li>
                    <li><a href="#/">Profil</a></li>
                    <li><a href="#/">Kontak</a></li>
                    <li><a href="#/">Daftar</a></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
