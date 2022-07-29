import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './movie/layout';
import MovieApp from './movie/movieApp';
import './App.css';
import Test from './hook/Test'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Test />
  </React.StrictMode>
);
