import React from 'react';
import icon from '../../Assets/img/app-icon.png';
import './LogoHome.css';
import { Icon } from 'semantic-ui-react';

import Auth from '../../../utils/auth';

export function LogoHome() {
    const loggedIn = Auth.loggedIn();

    return(
        <div className=''>
            <div className='logo-div'>
                <img src={icon} className='logo' alt="food and flicks logo"></img>
            </div>
            <div className='heading'>
                <h1>Let's make your dream night in</h1>
            </div>
            <div className="home-div">
                <div className='text-icon-div'>
                    <div className='centering'>
                        <span className='icon-centering'>
                            <Icon name="tv" />
                        </span>
                        <h5 >Choose the perfect movie</h5>
                    </div>
                    <div className='centering'>
                        <span className='icon-centering'>
                            <Icon name="food" />
                        </span>
                        <h5>Match it with some food</h5>
                    </div>
                    <div className='centering'>
                        <span className='icon-centering'>
                            <Icon name="glass martini" />
                        </span>
                        <h5>Top if off with a drink</h5>
                    </div>
                </div>
            </div>
            {loggedIn ? (
                <div className='get-started-button-div'>
                    <button onClick={event =>  window.location.href='/movie'} className='button-28'>Get Started <Icon name="hand pointer" /></button>
                </div>
            ) :
            <div className='get-started-button-div'>
            <button onClick={event =>  window.location.href='/login'} className='button-28'>Login to Get Started<Icon name="hand pointer" /></button>
            </div> }

        </div>
    );
}