import React from 'react';
import './App.css';
import { Header } from './components/header/header.component';
import { PasswordGenerator } from './components/password-generator-container/password-generator-container.component';

function App() {
  return (
    <div className="app">
      <Header />
      <PasswordGenerator />
    </div>
  );
}

export default App;
