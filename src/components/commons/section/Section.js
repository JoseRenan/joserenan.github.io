// @flow
import * as React from 'react';
import './Section.css';

type SectionProps = {
    backgroundColor: string,
    bp?: string;
    children: React.Node,
};

const Section = ({ backgroundColor, bp, children }: SectionProps) => (
    <div bp={bp} className="section" style={{ backgroundColor }}>
        {children}
    </div>
);

Section.defaultProps = {
    bp: ""
}

export default Section;
