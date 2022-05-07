import React from 'react';
import icon from '../../Assets/img/app-icon.png';
import './LogoHome.css';

export function LogoHome() {
    return(
        <div>
            <div className='logo-div'>
                <img src={icon} className='logo' alt="food and flicks logo"></img>
            </div>
        </div>
    );
}