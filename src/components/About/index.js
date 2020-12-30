import React from 'react';
import { FadeTransform, Fade } from 'react-animation-components';
import {GridContainer, Wrapper, GridContent, AboutHeading, AboutDesc, AboutBox, Box1, Box2, ImageBox, AboutTitle } from '../../shared/styles';
const About = () => {

    const renderMyDescriptions = () => {
        return (
            <Box2>
                <AboutBox>
                        <AboutTitle>BRIEF x 3</AboutTitle>
                        <AboutHeading>Intro About Me</AboutHeading>
                        <Fade in>
                        <AboutDesc>
                            Self-Taught Programmer.<br />
                            Graduated from NTU EEE in 2019. <br />
                            1st Job: DevOps Engineer, Micron, AUG 2019 - Present. <br />
                            Hobby: Enjoy Outdoor Sports, You name it.<br />
                            I run often, 4 -5 days a week, 4.5km each time.<br />
                            I'm a picky eater =)
                        </AboutDesc>
                        </Fade>
                </AboutBox>
            </Box2>
        );
    };

    const renderImage = () => {
        return (
            <Box1>
                <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%)'
                }}>
                    <ImageBox>
                        <img src='aboutMe.svg' alt="My usual"/>
                    </ImageBox>
                </FadeTransform>
            </Box1>
        )
    }
    return (
        <Wrapper id="About">
            <GridContainer>
                <GridContent>
                    {renderMyDescriptions()}
                    {renderImage()}
                </GridContent>
            </GridContainer>
        </Wrapper>
    );
};

export default About;