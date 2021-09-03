import React from 'react';
import { IDropdown } from '../../Helpers/types';
import './Dropdown.css';

const Dropdown = ({isShowMobileNav, toggle}: IDropdown) => {
    return (
        <ul className={isShowMobileNav ? "dropdown" : "hidden"} onClick={toggle}>
            <li><a href="#/">Beranda</a></li>
            <li><a href="#/">Profil</a></li>
            <li><a href="#/">Kontak</a></li>
            <li><a href="#/">Daftar</a></li>
        </ul>
    )
}

export default Dropdown;
