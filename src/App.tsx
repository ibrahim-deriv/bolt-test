import React from 'react';
import logo from './logo.svg';
import './App.css';
import '@deriv-com/quill-ui-next/style.css';
import { BasicButtonCoral } from '@deriv-com/quill-ui-next';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Quill UI Next Template
        </p>
        <BasicButtonCoral label="Get Started" />
      </header>
    </div>
  );
}

export default App;
