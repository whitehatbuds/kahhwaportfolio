import styled from 'styled-components';
import * as colors from './colors';

export const Button1 = styled.button`
    background-color: ${colors.PalmGreen};
    color: white;
    appearance: none;
    border: 1px solid white;
    padding: 1em 0.75em;
    transition: background-color 0.3s, color 0.3s;
    border-radius: 12px;
    ${props => {
        if (props.size) return `font-size: ${props.size}px;`;
    }}

    &:hover {
        background-color: ${colors.Asparagus};
        color: ${colors.PalmGreen}
        cursor: pointer;
        box-shadow: 0 12px 16px 0 rgba(0,0,0,0.24), 0 17px 50px 0 rgba(0,0,0,0.19);
    }
`;

export const GridContainer = styled.div`

    display:grid;
    z-index: 1;
    height: 800px;
    width: 100%
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0px 24px;
    justify-content: center;

    @media screen and (max-width: 768px) {
        width: 85%;
    }
`;

export const GridNested = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 70px;
    grid-gap: 1em;

    div {
        justify-self: center;
        align-self: center;
    }

    a { color: inherit; }

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        grid-auto-rows: 20px;
        padding: 20px 0px;
    }
`;

export const GridNested2 = styled.div`
    display:grid;
    grid-template-columns: 1fr 1fr;

    div {
        justify-self: center;
        align-self: start;
    }
`;

export const FooterDiv = styled.div`
    margin: 0;
    padding: 0;
    background-color: ${colors.Tangoroa};
    color: #ffffff;
`;

export const FooterSection = styled.div`
    max-width: 1000px;
    width: 100%;
    margin: 0 auto;
`;

export const FooterContainer1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 40px auto 0px;
`;

export const MainWrapper = styled.div`

    > div:nth-child(odd) {
        background: rgb(1, 6, 6);
        color: rgb(249,249,249);
    }
    > div:nth-child(even) {
        background: rgb(249,249,249);
        color: rgb(1, 6, 6);
    }
`;

export const Wrapper = styled.div`
    padding: 0;
    margin: 0;
    display: block;
    @media screen and (max-width: 768px) {
        padding: 80px 0px;
    }
`;

export const FlexWrapper1 = styled.div`
    padding: 0;
    margin: 0;
    @media screen and (max-width: 920px) {
        height: 1450px;
        width: 100%;
    }
`;

export const FlexContainer1 = styled.div`
    display: flex;
    height: 800px;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 920px) {
        height: 100%;
    }
`;

export const FlexHeadings1 = styled.h1`
    font-size: 2.5rem;
    color: #ffffff;
    margin-bottom: 64px;
`;

export const GridContent3Columns = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    gap: 20px;
    padding: 0px 40px;
    margin: 0px auto;
    @media screen and (max-width: 920px) {
        grid-template-columns: 1fr;
        padding: 0px 20px;
    }
`;

export const GridContent = styled.div`
    display: grid;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: "col1 col2";
    @media only screen and (max-width: 768px) {
        grid-template-areas:
        "col1 col1"
        "col2 col2";
    }
`;

export const Box1 = styled.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col1 / col1 / col1 / col1;
`;

export const Box2 = styled.div`
    margin-bottom: 15px;
    padding: 0px 15px;
    grid-area: col2 / col2 / col2 / col2;
`;

export const AboutBox = styled.div`
    max-width: 540px;
    padding-top: 0px;
    padding-bottom: 60px;
`;

export const ImageBox = styled.div`
    max-width: 555px;
    height: 100%;

    img {
        width: 100%;
        margin: 0px 0px 10px;
        padding-right 0px;
        border-radius:10px;
        -webkit-transition: margin 0.5s ease-out;
        -moz-transition: margin 0.5s ease-out;
        -o-transition: margin 0.5s ease-out;
        :hover {
            cursor:pointer;
            margin-top: 5px;
        }
    }
`;

export const AboutTitle = styled.p`
    color: rgb(1, 191, 113);
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;
export const AboutHeading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
`;

export const AboutDesc = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 28px;
`;

export const AboutButtonSection = styled.div`
    display: flex;
    justify-content: flex-start;
`;

export const Card1 = styled.div`
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;
    transition: all 0.2s ease-in-out 0s;
    width: 300px;
    color: rgb(1, 6, 6);
`;

export const CardImg1 = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const CardHeading1 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const CardText1 = styled.p`
    font-size: 1rem;
    text-align: center;
    margin-bottom: 10px;
`;

export const NavBar1 = styled.nav`
    opacity: ${({isAtTop}) => (isAtTop ? 1 : 0.7)};
    display: flex;
    justify-content: center;
    align-items: center;
    background: black;
    position: sticky;
    top: 0px;
    z-index: 10;
    transition: opacity 1s ease-in-out 0s;

    @media screen and (max-width: 960px) {
        transition: all 0.8s ease 0s;
    }
`;

export const NavContainer1 = styled.div`
    padding: 0px 2rem;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    flex-wrap: wrap;
`;

export const NavLogo1 = styled.a`
    padding: 1rem 0px;
    color: ${colors.PastelGreen};
    text-decoration: none;
    font-weight: 800;
    font-size: 1.7rem;

    span {
        color: ${colors.Panache};
        font-weight: 400;
        font-size: 1.3rem;
    }
`;

export const NavItemContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;

    @media screen and (max-width: 768px) {
        overflow: hidden;
        flex-direction: column;
        width: 100%;
        max-height: ${({isCollapse}) => (isCollapse ? "300px" : "0")};
        transition: max-height 0.5s ease-in-out 0s;
    }
`;

export const NavItem = styled.a`
    padding: 1rem 1.5rem;
    cursor: pointer;
    text-align: center;
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 0.9rem;
    transition: all 0.3s ease-in 0s;

    &.active {
        color: #7b7fda;
        border-bottom: 3px solid #01bf71;
    }

    &:hover {
        color: #7b7fda;
    }
`;

export const NavBarMenuContainer = styled.div`
    display: none;
    @media screen and (max-width: 768px) {
        display: block;
        position: absolute;
        top: 0px;
        right: 0px;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: white;
    }
`;

export const NavBarSvgIcon = styled.img`
    fill: currentColor;
    width: 1.3em;
    height: 1.3em;
    display: inline-block;
    font-size: 1.5rem;
    transition: fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    flex-shrink: 0;
    user-select: none;
`;