import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/podcast.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Tweet = () => (
  <Main
    title="Test"
    description="Test"
  >
    <article className="post markdown" id="yes">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/aristotle-quotes">Test</Link></h2>
          <p><strong> Test</strong></p>
        </div>
      </header>
      <ReactMarkdown
        source={markdown}
        renderers={{
          Link: LinkRenderer,
        }}
        escapeHtml={false}
      />
    </article>
  </Main>
);

export default Tweet;
