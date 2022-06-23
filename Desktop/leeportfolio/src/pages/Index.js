import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Michael D'Angelo's personal website. New York based Stanford ICME graduate, "
    + 'co-founder and CTO of Arthena, and YC Alumni.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">About</Link></h2>
          <p>
            Ph.D Student of Econometrics at Pennsylvania State University
          </p>
        </div>
      </header>
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/resume">CV</Link></h2>
          <p>
            Link to CV
          </p>
        </div>
      </header>
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/about">Research</Link></h2>
          <p>
            Link to Research
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Index;
