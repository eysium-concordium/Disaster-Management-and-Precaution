import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import NavBar from './components/NavBar/NavBar';
import NavBar2 from './components/NavBar2/NavBar';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NavBar/>
    <NavBar2/>
    {/* <App /> */}
  </React.StrictMode>
);


