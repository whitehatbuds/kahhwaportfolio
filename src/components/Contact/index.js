import React from 'react';
import {GridContainer, Wrapper, GridContent, AboutHeading, AboutDesc, AboutBox, Box1, Box2, ImageBox, AboutTitle } from '../../shared/styles';

const Contact = () => {

    const renderImage = () => {
        return (
            <Box2>
                <ImageBox>
                    <img src='contactMe.svg' alt="Contact Me"/>
                </ImageBox>
            </Box2>
        )
    };

    const renderContactInfo = () => {

        return (
            <Box1>
                <AboutBox>
                    <div>
                        <AboutTitle>Contact Information</AboutTitle>
                        <AboutHeading>+65 8750 0674 (Preferred)</AboutHeading>
                        <AboutDesc>KAHHWA96@GMAIL.COM</AboutDesc>
                    </div>
                </AboutBox>
            </Box1>
        );
    };

    return (
        <Wrapper id="Contact">
            <GridContainer>
                <GridContent>
                    {renderContactInfo()}
                    {renderImage()}
                </GridContent>
            </GridContainer>
        </Wrapper>
    );
}


export default Contact;