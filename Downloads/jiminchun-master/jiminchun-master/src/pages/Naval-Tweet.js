import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/naval-tweet.md');

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;
const min = Math.floor(count / 200);

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Tweet = () => (
  <Main
    title="Naval Ravikant"
    description="How to Get Rich (without getting lucky)"
  >
    <article className="post markdown" id="yes">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/naval-tweet">How to Get Rich (without getting lucky)</Link></h2>
          <p><strong>{min} min read</strong></p>
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
