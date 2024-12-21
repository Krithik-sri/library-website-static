import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import PagesList from './PagesList';
import './styles.css'

const App = () => {
  // Generate an array of 108 page numbers
  const pages = Array.from({ length: 108 }, (_, i) => i + 1);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />
        <Route path="/pages" element={<PagesList/>} />
      </Routes>
    </Router>
  );
};

export default App;
