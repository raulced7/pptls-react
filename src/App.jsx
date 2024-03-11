import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Game from './components/Game';
import Contact from './components/Contact';
import Nav from './components/Nav';

const App = () => {
  
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/game" element={<Game />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/" exact element={<Home />} />

      </Routes>
    </Router>
  );
};

export default App;
