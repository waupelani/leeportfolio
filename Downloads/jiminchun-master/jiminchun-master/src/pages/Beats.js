import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/beats.md');

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Tweet = () => (
  <Main
    title="Beats"
    description="List of Aristotle's Most Influential Quotes"
  >
    <article className="post markdown" id="yes">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/aristotle-quotes">Beats</Link></h2>
          <p><strong> October Beats</strong></p>
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
