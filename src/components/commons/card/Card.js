// @flow

import * as React from 'react';
import './Card.css';

const Card = ({ bp }: { bp: string }) => (
    <div bp={bp} className="card">
        <h1>About me</h1>
        <p>
            Well... as I already said, my name is Renan, I was born in Brazil
            and I live in Campina Grande, PB. I'm currently graduating in
            Computer Science at the Federal University of Campina Grande.
        </p>
        <p>
            My "programmer's life" began in 2013 when I chose to start high
            school with an integrated computer technician course. At first, I
            was not sure it would be the thing I wanted to do in my working
            life, but in the first programming class, when I did my first sum
            calculator, all my doubts were gone, I wanted to be a software
            developer.
        </p>
        <p>
            Currently, I'm front-end developer at Data Quality Laboratory in
            UFCG and maintainer in {' '}
            <a href="http://github.com/calluswhatyouwant">calluswhatyouwant</a>
            {' '} (where I and{' '}
            <a href="http://github.com/jrobsonjr">@jrobsonjr</a>
            {' '} make our music-related personal projects) and {' '}
            <a href="http://github.com/opendevufcg">OpenDevUFCG</a>
            {' '} (focused in making projects to help other UFCG students start
            on open source).
        </p>
    </div>
);

Card.defaultProperties = {
    bp: '',
};

export default Card;
