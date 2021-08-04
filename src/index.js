import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './assets/global-css/index.css';
import { RouteApp } from './route';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <RouteApp/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
