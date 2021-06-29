import React, { useState } from 'react';
import Navigation from './components/Navigation';
import About from './components/About';
import './App.css';

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <About></About>
    </div>
  );
}

export default App;
