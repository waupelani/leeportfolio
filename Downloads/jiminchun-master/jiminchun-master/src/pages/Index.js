import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';

const Index = () => (
  <Main
    description={"Jimin Chun's personal website. Penn State graduate, "
    + 'co-founder and CTO of Waupelani.'}
  >
    <article className="post" id="index">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/">Welcome</Link></h2>
          <p>
            A collection of thoughts.
          </p>
        </div>
      </header>
      <p> Welcome to my website@@@@@! This site was created with React.
      </p>
      <p>Check out my <a href="https://jiminchun.com/works" target="_blank" rel="noopener noreferrer">main work!</a>.</p>
      <p>Check out my <a href="https://www.behance.net/jimdoge" target="_blank" rel="noopener noreferrer">other work!</a>.</p>
      <p>Check out my <a href="https://www.redbubble.com/people/joomynoomy/shop?asc=u&ref=account-nav-dropdown" target="_blank" rel="noopener noreferrer">store!</a>.</p>
      <p>Check out my <a href="https://www.youtube.com/channel/UCxUgMd_UEbveVjKbOGvgvdA/videos" target="_blank" rel="noopener noreferrer">music!</a>.</p>
    </article>
  </Main>
);

export default Index;
