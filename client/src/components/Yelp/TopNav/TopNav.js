import React from 'react';
import txt from '../../assets/text-WHITE.png'
import './TopNav.css';

export function TopNav() {
    return (
        <div>
            <div className="nav">
                <div>
                    <a href="/">
                      <img src={txt} className='logo' alt="food and flicks logo"></img>
                    </a>
                </div>
                <div className='right'>
                    {/* <span>Home</span>
                    <span>Get Started</span>
                    <button className='button'>Login/Signup</button> */}
                    <ul className='ul-nav right'>
                        <li className='li-nav'><a href="/">Home</a></li>
                        <li className='li-nav'><a href="/">Get Started</a></li>
                        <li className='li-nav'><a href="/">Login/Signup</a></li>
                    </ul>
                    
                </div>
            </div>
        </div>
    );
}