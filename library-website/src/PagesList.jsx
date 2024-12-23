import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Page074 from './pages/074';



const PagesList = () => {
  const pageNumbers = Array.from({ length: 108 }, (_, i) => (i + 1).toString().padStart(3, '0'));

  return (
    <div>
      <h1>All Pages</h1>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link to={`/page/${number}`}>Page {number}</Link>
          </li>
        ))}
      </ul>
      <Routes>
        {pageNumbers.map((number) => (
          <Route
            key={number}
            path={`/page/${number}`}
            element={<Page074/>}
          />
        ))}
      </Routes>
    </div>
  );
};

export default PagesList;