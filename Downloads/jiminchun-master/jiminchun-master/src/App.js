import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './layouts/Main'; // fallback for lazy pages
import './static/css/main.scss'; // All of our styles

const { PUBLIC_URL } = process.env;

// Every route - we lazy load so that each page can be chunked
// NOTE that some of these chunks are very small. We should optimize
// which pages are lazy loaded in the future.
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Index = lazy(() => import('./pages/Index'));
const NotFound = lazy(() => import('./pages/NotFound'));
const Projects = lazy(() => import('./pages/Projects'));
const Resume = lazy(() => import('./pages/Resume'));
const Stats = lazy(() => import('./pages/Stats'));
const NavalTweet = lazy(() => import('./pages/Naval-Tweet'));
const AristotleQuotes = lazy(() => import('./pages/Aristotle-Quotes'));
const Beats = lazy(() => import('./pages/Beats'));
const Augustine = lazy(() => import('./pages/Augustine'));
const Aram = lazy(() => import('./pages/Aram'));
const Works = lazy(() => import('./pages/Works'));
const Test = lazy(() => import('./pages/Test'));
const Image = lazy(() => import('./pages/Image'));

const App = () => (
  <BrowserRouter basename={PUBLIC_URL}>
    <Suspense fallback={<Main />}>
      <Switch>
        <Route exact path="/" component={Index} />
        <Route path="/about" component={About} />
        <Route path="/naval-tweet" component={NavalTweet} />
        <Route path="/aristotle-quotes" component={AristotleQuotes} />
        <Route path="/projects" component={Projects} />
        <Route path="/stats" component={Stats} />
        <Route path="/beats" component={Beats} />
        <Route path="/contact" component={Contact} />
        <Route path="/resume" component={Resume} />
        <Route path="/augustine" component={Augustine} />
        <Route path="/aram" component={Aram} />
        <Route path="/test" component={Test} />
        <Route path="/works" component={Works} />
        <Route path="/images" component={Image} />
        <Route component={NotFound} status={404} />
      </Switch>
    </Suspense>
  </BrowserRouter>
);

export default App;
