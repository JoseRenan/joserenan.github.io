// @flow
import * as React from 'react';
import './Project.css';

type Project = {
    title: string,
    description: string,
    id: string,
    org: string,
    npm?: boolean,
};

const ProjectCard = ({ project }: { project: Project }) => (
    <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div bp="grid" className="project-links">
            {project.npm ? (
                <a
                    href={`https://www.npmjs.com/package/${project.id}`}
                    target="_blank"
                    rel="noopener noreferrer">
                    <i className="fab fa-npm" />
                </a>
            ) : null}
            <a
                href={`https://github.com/${project.org}/${project.id}`}
                target="_blank"
                rel="noopener noreferrer">
                <i className="fab fa-github" />
            </a>
        </div>
    </div>
);

ProjectCard.defaultProps = {
    npm: false,
};

export default ProjectCard;
