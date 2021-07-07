import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Footer from './components/Footer';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';

import './App.css';

function App() {

  const [eventKey, selectActiveKey] = useState('About');

  return (
    <div>
      <Navigation
      eventKey={eventKey}
      selectActiveKey={selectActiveKey}
      ></Navigation>
      <main>
        {eventKey === 'About' && (
          <About />
        )}
        {eventKey === 'Portfolio' && (
          <Portfolio />
        )}
        {eventKey === 'Contact' && (
          <Contact />
        )}
        {eventKey === 'Resume' && (
          <Resume />
        )}
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
