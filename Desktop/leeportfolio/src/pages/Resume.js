import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Education from '../components/Resume/Education';
import Experience from '../components/Resume/Experience';
import degrees from '../data/resume/degrees';
import positions from '../data/resume/positions';

const Resume = () => (
  <Main
    title="Resume"
    description="Michael D'Angelo's Resume. Arthena, Matroid, YC, Skeptical Investments, Stanford ICME, Planet Labs, and Facebook."
  >
    <article className="post" id="resume">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="resume">CV</Link></h2>

        </div>
      </header>
      <Education data={degrees} />
      <Experience data={positions} />

    </article>
  </Main>
);

export default Resume;
