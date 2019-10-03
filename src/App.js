import React from 'react'
import logo from './logo.svg'
import './App.css'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Profile from './components/Profile/Profile'
import Dialogs from './components/Dialogs/Dialogs'
import News from './components/News/News'
import Music from './components/Music/Music'
import Friends from './components/Friends/Friends'
import Settings from './components/Settings/Settings'
import { Route, BrowserRouter } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />

        <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/news' component={News}/>
        <Route path='/music' component={Music}/>
        <Route path='/friends' component={Friends}/>
        <Route path='/settings' component={Settings}/>
      </div>
    </BrowserRouter>

  )
}

export default App
