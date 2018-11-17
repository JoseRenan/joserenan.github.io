// @flow
import * as React from 'react';

import Section from '../commons/section/Section';
import './Hello.css';

const Links = () => (
    <div className="icon-links">
        <a
            href="https://www.linkedin.com/in/joserenan"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-linkedin" />
        </a>
        <a
            href="https://github.com/joserenan"
            target="_blank"
            rel="noopener noreferrer">
            <i className="fab fa-github-square" />
        </a>
        <a href="mailto:joserenansl99@gmail.com">
            <i className="fas fa-envelope-square" />
        </a>
    </div>
);

const Hello = () => (
    <Section
        bp="grid vertical-center"
        className="hello"
        backgroundColor="white">
        <div bp="8 offset-3 text-center">
            <h1>
                Hi! My name's <b>José Renan</b> and I'm a student, full-stack
                developer and an open source lover.
            </h1>
            <Links />
        </div>
    </Section>
);

export default Hello;
