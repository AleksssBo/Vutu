import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Aside from './components/Aside/Aside'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import Music from './components/Music/Music'
import Friends from './components/Friends/Friends'
import Settings from './components/Settings/Settings'
import { Route, BrowserRouter } from 'react-router-dom'
import DialogsContainer from "./components/Dialogs/DialogsContainer";

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />

        <Route path='/profile' render={() => <Profile store={props.store}/>}/>

        <Route path='/dialogs' render={() => <DialogsContainer store={props.store}/>}/>
        <Route path='/news' render={() => <News />}/>
        <Route path='/music' render={() => <Music />}/>
        <Route path='/friends' render={() => <Friends />}/>
        <Route path='/settings' render={() => <Settings />}/>
      </div>
    </BrowserRouter>

  )
}

export default App
