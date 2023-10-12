import React, { useState } from 'react';
import Home from './Home';
import About from './About';
import App from './App'; // Este es tu editor de código
import Header from './Header';
import Retos from './Retos';

function Main() {
  const [route, setRoute] = useState('home');

  let Component;
  switch (route) {
    case 'home':
      Component = Home;
      break;
    case 'about':
      Component = About;
      break;
    case 'editor':
      Component = App;
      break;
    case 'retos':
      Component = Retos;
      break;
    default:
      Component = Home;
  }
  return (
    <div style={{ backgroundColor: '#fff', color: '#333', height: '100vh' }}>
      <Header setRoute={setRoute} />
      <Component />
    </div>
  );
}

export default Main;