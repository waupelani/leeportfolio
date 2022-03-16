import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

import Cell from '../components/Projects/Cell';
import data from '../data/arcane-jinx-shirt-data';

const Index = () => (
  <Main>
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="arcane-jinx-shirt"><Link to="/">Arcane Jinx Shirts </Link></h2>
          <p>
            ◼ BLCK/WHTE ◼
          </p>
          {data.map((project) => (
            <Cell
              data={project}
              key={project.title}
            />
          ))}
          <p>
            High quality Arcane Jinx Shirts Black and White Available Now.
          </p>
        </div>
      </header>
    </article>
  </Main>
);

export default Index;
