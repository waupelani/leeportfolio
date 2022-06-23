import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Kippeum Lee</h2>
        <p><a href="mailto:kul598@psu.edu">kul598@psu.edu</a></p>
      </header>
    </section>
    <section className="blurb">
      <p>114 Kern Bldg
        Pennsylvania State University.
        <br />University Park, PA 16802
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Kippeum Lee <Link to="/">mldangelo.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
