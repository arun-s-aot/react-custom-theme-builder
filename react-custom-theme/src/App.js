import LoginForm from './components/Login';
import './App.css';
import React from 'react';
import ThemeTest from './components/ThemeTest';
import TestWebComponent from './components/ReactToWebBuilder'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <test-web-component name="Weston"></test-web-component>
        <ThemeTest/>
      </header>
    </div>
  );
}

export default App;
