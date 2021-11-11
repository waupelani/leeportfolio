import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/lee.webp`} alt="" />
        <header>
          <h2>League of Legends blog</h2>
        </header>
      </Link>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, op gg is too slow for my laptop
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; RuneBuild 2021 <Link to="/">runebuild.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
