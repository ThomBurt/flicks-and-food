import React from 'react';
import icon from '../../Assets/img/app-icon.png';
import './LogoHome.css';
import { Icon } from 'semantic-ui-react';

export function LogoHome() {
    
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
                            <Icon name="coffee" />
                        </span>
                        <h5>Top if off with a drink</h5>
                    </div>
                </div>
            </div>
            <div className='get-started-button-div'>
                <button onClick={event =>  window.location.href='/movie'} className='button-28'>Get Started <Icon name="hand pointer" /></button>
            </div>
        </div>
    );
}