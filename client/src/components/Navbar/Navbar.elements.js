import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { Container } from '../../golbalStyles'


export const Nav = styled.nav`
background: #3872b3;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
top: 0;
z-index: 999;
`;

export const NavContainer = styled(Container)`
display: flex;
justify-content: space-between;
height: 80px;
position: fixed;

${Container}
`;

export const NavLogo = styled(Link)`
color: #fff;
justify-self: flex-start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`;

export const Image = styled.img`
margin-right: 0.5rem;
height: 70px;
width: 70px;
`;

export const Icon = styled.img`
margin-right: 0.5rem;
width: 280px;
`;

export const MobileIcon = styled.div`
display: none;

@media screen and (max-width: 960px) {
   display: block;
   position: absolute;
   top: 0;
   right: 0;
   transform: translate(-100%, 60%);
   font-size: 1.8rem;
   cursor: pointer;
}
`;

export const NavMenu = styled.ul`
display: flex;
align-items: center;
list-style: none;
text-align: center;

@media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 90vh;
    position: absolute;
    top: 80px;
    left: ${({click}) => (click ? 0 : '-100%')};
    opacity: 1;
    transition: all 0.5s ease;
    background: #101522;
}
`;

export const NavItem = styled.li`
height: 80px;
border-bottom: 2px solid transparent;

&:hover {
    border-bottom: 4px solid #FFFFFF;
}

@media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
        border: none;
    }
}
`;

export const NavLinks = styled(Link)`
color: #B8E0FF;
display: flex;
align-items: center;
text-decoration: none;
padding: 0.5rem 1rem;
height: 100%;

&:hover {
    color: #FFFFFF;
}

@media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
        color: #4b59f7;
        transition: all 0.3s ease;
    }
}
`;