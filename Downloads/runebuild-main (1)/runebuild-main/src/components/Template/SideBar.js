import React from 'react';
import { Link } from 'react-router-dom';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/runebuild-logo.webp`} alt="" />
      </Link>
    </section>

    <section className="blurb">
      <h2> We are committed to empower the imagination of all talents.
        Our mission as a brand and as a company is
        to promote creativity by supporting talents from everywhere.
      </h2>
      <p>,
      </p>
    </section>

    <section id="footer">
      <p className="copyright">&copy; RuneBuild 2021 <Link to="/">runebuild.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
