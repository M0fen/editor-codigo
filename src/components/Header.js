import React from 'react';
import './Header.css';

function Header({ setRoute }) {
  return (
    <header>
      <button onClick={() => setRoute('home')}>Home</button>
      <button onClick={() => setRoute('about')}>About</button>
      <button onClick={() => setRoute('retos')}>Retos</button>
      <button onClick={() => setRoute('editor')}>Editor</button>
    </header>
  );
}

export default Header;
