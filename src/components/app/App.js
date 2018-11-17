// @flow
import * as React from 'react';

import './App.css';
import Section from '../commons/section/Section';
import Hello from '../hello/Hello';
import About from '../about/About';

const App = () => (
    <div>
        <Hello />
        <About />
        <Section backgroundColor="blue">Testing</Section>
    </div>
);

export default App;
