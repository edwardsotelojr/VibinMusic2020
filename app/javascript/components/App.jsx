import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import HelloWorld from './HelloWorld'
import NavBar from "./NavBar"
import './App.css'
import configureStore from "../configureStore"
import NonUserHomePage from "./NonUserHomePage"
import GroupiesPage from "./GroupiesPage"

import ExplorePage from './ExplorePage'
const store = configureStore();
class App extends React.Component {
    render () {
        return (
            <Provider store={store}>
            <BrowserRouter>
            <NavBar />
                <Switch>
                    <Route exact path="/" render={() => <NonUserHomePage/>} />
                    <Route path="/explore" render={() => <ExplorePage />}/>
                    <Route path="/groupies" render={() => <GroupiesPage />}/>

        </Switch>
            </BrowserRouter>
        </Provider>
        );
    }
}

export default App