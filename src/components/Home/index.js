import React from 'react';
import { FadeTransform, Fade } from 'react-animation-components';
import {GridContainer, Wrapper, GridContent, AboutHeading, AboutDesc, AboutButtonSection, AboutBox, Box1, Box2, ImageBox, AboutTitle, Button1 } from '../../shared/styles';
const Home = () => {

    const renderMyDescriptions = () => {
        return (
            <Box1>
                <AboutBox>
                    <div>
                        <AboutTitle>Nice to Meet You =)</AboutTitle>
                        <Fade in>
                        <AboutHeading>Call Me Kah Hwa</AboutHeading>
                        </Fade>
                        <Fade in>
                        <AboutDesc>DevOps Engineer, Micron 2019 Aug - Present</AboutDesc>
                        </Fade>
                    </div>
                    {renderDownloadCV()}
                </AboutBox>
            </Box1>
        );
    };

    const renderDownloadCV = () => {
      return (
        <AboutButtonSection>
            <form target="_blank" action="https://drive.google.com/file/d/1-t5EorFXVTBqSMJ1ye08HgnZwu10kDfh/view?usp=sharing">
            <Fade in>
                <Button1 type="submit">Download Resume</Button1>
            </Fade>
            </form>
        </AboutButtonSection>
      );
    };

    const renderImage = () => {
        return (
            <Box2>
                <ImageBox>
                <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <img src='profile.png' alt="Barcelona's Alley way"/>
                </FadeTransform>
                </ImageBox>
            </Box2>
        )
    }
    return (
        <Wrapper id="Home">
            <GridContainer>
                <GridContent>
                    {renderMyDescriptions()}
                    {renderImage()}
                </GridContent>
            </GridContainer>
        </Wrapper>
    );
};

export default Home;