import React from 'react';
import icon from '../../Assets/img/bg-home.png';
import './BgPicture.css';

export function BgPicture() {
    return(
        <div>
            <div className='logo-div'>
                <img src={icon} className='logo' alt="food and flicks logo"></img>
            </div>
        </div>
    );
}