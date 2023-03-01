import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './css/style.css';
import reportWebVitals from './reportWebVitals';

import App from './App';
import Calculadora from './components/Calculadora'
import ClimaApp from './components/CityInfo/ClimaApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <ClimaApp city={'Alguna'} country={'De algun lugar'}/>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
