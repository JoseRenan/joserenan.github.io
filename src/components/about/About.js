// @flow
import * as React from 'react';

import Section from '../commons/section/Section';
import './About.css';
import Card from '../commons/card/Card';
import Project from '../commons/project/Project';

const projects = [
    {
        title: 'Teste',
        description: 'Some description will be here!!!',
        id: 'testing',
        org: 'testing',
        npm: true
    }, {
        title: 'Teste',
        description: 'Some description will be here!!!',
        id: 'testing',
        org: 'testing',
        npm: true
    }, {
        title: 'Teste',
        description: 'Some description will be here!!!',
        id: 'testing',
        org: 'testing',
        npm: true
    }, {
        title: 'Teste',
        description: 'Some description will be here!!!',
        id: 'testing',
        org: 'testing',
        npm: true
    }, {
        title: 'Teste',
        description: 'Some description will be here!!!',
        id: 'testing',
        org: 'testing',
        npm: true
    }, {
        title: 'Teste',
        description: 'Some description will be here!!!',
        id: 'testing',
        org: 'testing',
        npm: true
    }
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