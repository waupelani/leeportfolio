import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/profile.webp`} alt="" />
      </Link>
      <header>
        <h2>Jimin Chun</h2>
      </header>
    </section>

    <section className="blurb">
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/aristotle-quotes') ? <Link to="/aristotle-quotes" className="button">Aristotle</Link> : <Link to="/aristotle-quotes" className="button">Aristotle</Link>}
          {!window.location.pathname.includes('/augustine') ? <Link to="/augustine" className="button">Augustine</Link> : <Link to="/augustine" className="button">Augustine</Link>}
          {!window.location.pathname.includes('/aram') ? <Link to="/aram" className="button">Chun</Link> : <Link to="/aram" className="button">Chun</Link>}
          {!window.location.pathname.includes('/naval-tweet') ? <Link to="/naval-tweet" className="button">Ravikant</Link> : <Link to="/naval-tweet" className="button">Ravikant</Link>}
          {!window.location.pathname.includes('/personal-works') ? <Link to="/works" className="button">Works</Link> : <Link to="/works" className="button">Works</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Jimin Chun <Link to="/">jiminchun.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
