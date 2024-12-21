import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Page from './components/Page';
import './styles.css';

const App = () => {
  // Generate an array of 108 page numbers
  const pages = Array.from({ length: 108 }, (_, i) => i + 1);

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home route */}
        <Route path="/" element={<Home />} />

        {/* Dynamic routes for each page */}
        {pages.map((page) => (
          <Route
            key={page}
            path={`/page/${page}`}
            element={<Page pageNumber={page} />}
          />
        ))}

        {/* Optional: Add a route to list all page links */}
        <Route
          path="/pages"
          element={
            <div className="pages-list">
              <h1>All Pages</h1>
              <ul>
                {pages.map((page) => (
                  <li key={page}>
                    <a href={`/page/${page}`}>Go to Page {page}</a>
                  </li>
                ))}
              </ul>
            </div>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
