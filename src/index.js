import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Main from './components/Main'; // Importa el componente Main en lugar de App

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
