import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/projects';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/"> </Link></h2>
          <p>
            ◼ ARCANE COLLECTION ◼
          </p>
          {data.map((project) => (
            <Cell
              data={project}
              key={project.title}
            />
          ))}
        </div>
      </header>
    </article>
  </Main>
);

export default Index;
