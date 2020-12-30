import React from 'react';
import {FlexContainer1, FlexWrapper1, FlexHeadings1, GridContent3Columns, Card1, CardImg1, CardHeading1, CardText1 } from '../../shared/styles';

const Skills = () => {

    const renderSkillsContent = () => {

        return (
            <GridContent3Columns>
                <Card1>
                    <CardImg1 src="Skills1.svg"/>
                    <CardHeading1>Familiar Technologies</CardHeading1>
                    <CardText1>Linux, Git, Azure Dev Ops</CardText1>
                    <CardText1>SQL Databases</CardText1>
                    <CardText1>Kibana, Splunk DashBoard</CardText1>
                </Card1>
                <Card1>
                    <CardImg1 src="Skills2.svg"/>
                    <CardHeading1>Programming Languages</CardHeading1>
                    <CardText1>Perl</CardText1>
                    <CardText1>Javascript (React, NodeJs)</CardText1>
                    <CardText1>Python</CardText1>
                </Card1>
                <Card1>
                    <CardImg1 src="Skills3.svg"/>
                    <CardHeading1>Completed Projects</CardHeading1>
                    <CardText1>Utility Services, Automation Projects</CardText1>
                    <CardText1>Reusable Libraries to Facilitate Shorter Development Cycles</CardText1>
                </Card1>
            </GridContent3Columns>
        );
    };

    return (
        <FlexWrapper1 id="Skills">
            <FlexContainer1>
                <FlexHeadings1>Skills</FlexHeadings1>
                {renderSkillsContent()}
            </FlexContainer1>
        </FlexWrapper1>
    );
}


export default Skills;