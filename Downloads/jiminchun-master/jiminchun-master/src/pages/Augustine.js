import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import raw from 'raw.macro';

import Main from '../layouts/Main';

// uses babel to load contents of file
const markdown = raw('../data/augustine.md');

const count = markdown.split(/\s+/)
  .map((s) => s.replace(/\W/g, ''))
  .filter((s) => s.length).length;
const min = Math.floor(count / 200);

// Make all hrefs react router links
const LinkRenderer = ({ ...children }) => <Link {...children} />;

const Tweet = () => (
  <Main
    title="Augustine Quotes"
    description="List of Augustine's Most Influential Quotes"
  >
    <article className="post markdown" id="yes">
      <header>
        <div className="title">
          <h2 data-testid="heading"><Link to="/augustine">Augustine Quotes</Link></h2>
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
