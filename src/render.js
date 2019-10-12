import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {addPost, updateTextPost, updateThemePost} from './redux/state'

export let renderApp = (state) => {
    ReactDOM.render(<App state={state}
                         addPost={ addPost }
                         updateTextPost={ updateTextPost }
                         updateThemePost={ updateThemePost }/>,
        document.getElementById('root'));
}


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
