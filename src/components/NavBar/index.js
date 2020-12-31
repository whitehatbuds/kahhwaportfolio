import React, {useState, useEffect}  from 'react';
import { NavBar1, NavContainer1, NavLogo1, NavItem, NavItemContainer, NavBarMenuContainer, NavBarSvgIcon } from '../../shared/styles';
const NavBar = () => {

    const [isCollapse, setIsCollapse] = useState(false);
    const [isAtTop, setisAtTop] = useState(true);

    const toggleClick = () => setIsCollapse(!isCollapse);

    const collapseNavBar = () => setIsCollapse(false);

    useEffect(() => {
        window.addEventListener('scroll', isAtTopPosition);
        return () => window.removeEventListener("scroll", isAtTopPosition);
    });

    const isAtTopPosition = () => (window.pageYOffset) ? setisAtTop(false) : setisAtTop(true);
    return (
        <NavBar1 id="NavBar" isAtTop={isAtTop}>
            <NavContainer1>
                <NavLogo1 href='#'>
                    Kah Hwa's <span> Website</span>
                </NavLogo1>
                <NavBarMenuContainer id="NavMenuButton" onClick={toggleClick} >
                    <NavBarSvgIcon src="menuicon.svg" alt="Menu Icon"/>
                </NavBarMenuContainer>
                <NavItemContainer id="NavMenu" isCollapse={isCollapse}>
                    <NavItem href='#About' onClick={collapseNavBar}>About</NavItem>
                    <NavItem href='#Skills' onClick={collapseNavBar}>Skills</NavItem>
                    <NavItem href='#Contact' onClick={collapseNavBar}>Contact</NavItem>
                </NavItemContainer>
            </NavContainer1>
        </NavBar1>
    );
};

export default NavBar;