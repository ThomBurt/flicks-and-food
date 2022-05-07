import React from 'react';
import icon from '../../Assets/img/icon.png';
import './Logo.css';

export function Logo() {
    return(
        <div>
            <div className='logo-div'>
                <img src={icon} className='logo' alt="food and flicks logo"></img>
            </div>
        </div>
    );
}