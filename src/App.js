import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import Aside from './components/Aside/Aside';
import Profile from './components/Profile/Profile';

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
