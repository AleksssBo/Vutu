import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Aside from './components/Aside';
import Profile from './components/Profile';

function App() {
  return (
    <div className="App">
      <Header />
      <Aside />
      <Profile />
    </div>
  );
}

export default App;
