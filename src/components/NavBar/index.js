import React, {useState, useEffect}  from 'react';
import { NavBar1, NavContainer1, NavLogo1, NavItem, NavItemContainer, NavBarMenuContainer, NavBarSvgIcon } from '../../shared/styles';
const NavBar = () => {

    const [isCollapse, setIsCollapse] = useState(false);
    const [isAtTop, setisAtTop] = useState(true);

    const toggleClick = () => setIsCollapse(!isCollapse);

    useEffect(() => {
        let watchScroll = () => window.addEventListener("scroll", isAtTopPosition);
        watchScroll();
        return () => window.removeEventListener("scroll", isAtTopPosition);
    });

    const isAtTopPosition = y => (y === 0) ? setisAtTop(true) : setisAtTop(false);
    return (
        <NavBar1 id="NavBar" isAtTop={isAtTop}>
            <NavContainer1>
                <NavLogo1 href='#top'>
                    Kah Hwa's <span> Website</span>
                </NavLogo1>
                <NavBarMenuContainer id="NavMenuButton" onClick={toggleClick} >
                    <NavBarSvgIcon src="menuicon.svg" alt="Menu Icon"/>
                </NavBarMenuContainer>
                <NavItemContainer id="NavMenu" isCollapse={isCollapse}>
                    <NavItem href='#About'>About</NavItem>
                    <NavItem href='#Skills'>Skills</NavItem>
                    <NavItem href='#Contact'>Contact</NavItem>
                </NavItemContainer>
            </NavContainer1>
        </NavBar1>
    );
};

export default NavBar;