// @flow
import * as React from 'react';

import Section from '../commons/section/Section';
import './About.css';
import Card from '../commons/card/Card';
import Project from '../commons/project/Project';

const projects = [
    {
        title: 'Spotify Web SDK',
        description: 'A JavaScript SDK with the purpose of simplifying the process of obtaining and managing data from the Spotify Web API.',
        id: 'spotify-web-sdk',
        org: 'calluswhatyouwant',
        npm: true
    }, {
        title: 'Musicritic',
        description: 'A ReactJS web application that aims to be a music-specific Metacritic, with ratings provided by users using information provided by Spotify’s Web API.',
        id: 'musicritic',
        org: 'calluswhatyouwant',
    }, {
        title: 'IssueAi',
        description: 'A platform to students of computer science at UFCG find open source projects made by other students to contribute. A gateway to enter in the open source world.',
        id: 'issueai',
        org: 'opendevufcg',
    }, {
        title: 'Opining',
        description: 'Android application to help students and teachers with the management and organization of classroom debates that can be taken out of the school.',
        id: 'opining_android',
        org: 'joserenan',
    }, {
        title: 'NutrIF',
        description: 'Web application which manages the IFPB student’s restaurant, entrance and exit of the meals and benefited students.',
        id: 'nutrif',
        org: 'ladossifpb',
    },
];

const About = () => (
    <Section
        backgroundColor="#242424">
        <div bp="grid" className="about">
            <Card bp="12@md 4@lg" />
            <div bp="12@md 8@lg" className="projects">
                <h1>Projects</h1>
                <div bp="grid 4@xl 6@md 12@sm">
                    {projects.map(project => <Project key={project.id} project={project}/>)}
                </div>
            </div>
        </div>
    </Section>
);

export default About;