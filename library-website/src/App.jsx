import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import pages from './data/pages.json';
import Page from './components/Page';

const App = () => (
  <Router>
    <Routes>
      {pages.map((page) => (
        <Route key={page.id} path={`/page/${page.id}`} element={<Page page={page} />} />
      ))}
    </Routes>
  </Router>
);

export default App;
