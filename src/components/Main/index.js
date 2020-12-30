import React from 'react';
import Footer from '../Footer';
import Home from '../Home';
import Contact from '../Contact';
import About from '../About';
import Skills from '../Skills';
import {MainWrapper} from '../../shared/styles';
import NavBar from '../NavBar';
const Main = () => {
    return (
        <div>
            <NavBar />
            <MainWrapper id="MainWrapper">
                <Home />
                <About />
                <Skills />
                <Contact />
            </MainWrapper>
            <Footer />
        </div>
    );
};

export default Main;