// @flow

import * as React from 'react';
import './Card.css';

const Card = ({ bp }: { bp: string }) => (
    <div bp={bp} className="card">
        <h1>About me</h1>
        <p></p>
    </div>
);

Card.defaultProperties = {
    bp: ''
};

export default Card;
