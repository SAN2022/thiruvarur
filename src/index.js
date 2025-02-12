import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import About from './pagefiles/about.js';
import Schools from './pagefiles/schools.js';
import {HashRouter , Routes, Route, Link, NavLink,} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
// import '../node_modules/react-bootstrap/dist/react-bootstrap';

const root = ReactDOM.createRoot(document.getElementById('root'));
  
root.render(
  <HashRouter>
    <App/>
  </HashRouter>
);