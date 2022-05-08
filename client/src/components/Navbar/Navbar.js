import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import {
    Nav,
    NavContainer,
    NavLogo,
  //  Image,
    Icon,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './Navbar.elements';

//const logo = require('../Assets/img/icon-BLACK.png')
const title = require('../Assets/img/text-WHITE.png')

export const NavBar = () => {

    
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    return (
    <>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavContainer>
                    <NavLogo to="/" onClick={closeMobileMenu}>
                        {/* <Image src={logo} /> */}
                        <Icon src={title} />
                    </NavLogo>
                    <MobileIcon onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                    </MobileIcon>
                    <NavMenu onClick={handleClick} click={click}>

                    <NavItem>
                    <NavLinks to="/home" onClick={event =>  window.location.href='/'}>
                        Home
                    </NavLinks>
                    </NavItem>

                    <NavItem>
                    <NavLinks to="/movie" onClick={event =>  window.location.href='/movie'}>
                        Get Started
                    </NavLinks>
                    </NavItem>

                    <NavItem>
                    <NavLinks to="/history" onClick={event => window.location.href='/history'}>
                        History
                    </NavLinks>
                    </NavItem>
                
                    <NavItem>
                    <NavLinks to="/login" onClick={event => window.location.href='/login'}>
                        Login/Signup
                    </NavLinks>
                    </NavItem>
                </NavMenu>
                </NavContainer>
            </Nav>
        </IconContext.Provider>
    </>    
    );
};