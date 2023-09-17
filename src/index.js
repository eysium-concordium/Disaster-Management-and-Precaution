import React from 'react';
import ReactDOM from 'react-dom/client';
// import {  BrowserRouter } from 'react-router-dom';


import App from './App';
// import NavBar from './components/NavBar/NavBar';
// import NavBar2 from './components/NavBar2/NavBar';
// import Carousel from './components/NewsSlider/Carousel';
import NavPag from './components/NavPage/NavPag';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <NavBar/>
    <NavPag/> */}
    {/* <Carousel/> */}
    <App />
    
  </React.StrictMode>
);


