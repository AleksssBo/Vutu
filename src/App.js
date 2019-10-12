import React from 'react'
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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Aside />

        <Route path='/profile' render={() => <Profile state={props.state.profilePage}
                                                      addPost={props.addPost}
                                                      updateText={ props.updateTextPost }
                                                      updateTheme={ props.updateThemePost }
        />}/>

        <Route path='/dialogs' render={() => <Dialogs state={props.state.dialogsPage}/>}/>
        <Route path='/news' render={() => <News />}/>
        <Route path='/music' render={() => <Music />}/>
        <Route path='/friends' render={() => <Friends />}/>
        <Route path='/settings' render={() => <Settings />}/>
      </div>
    </BrowserRouter>

  )
}

export default App
