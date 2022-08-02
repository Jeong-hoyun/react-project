import React from 'react';
import ReactDOM from 'react-dom/client';
import Layout from './movie/layout';
import MovieApp from './movie/movieApp';
import './App.css';
import Memo from './memo/Memo'
import Check from './controlled/check';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Check />
  </React.StrictMode>
);
