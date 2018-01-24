import React, { Component } from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import './App.css';

//Containers
import Header from './containers/Header';
import Category from './containers/Category';
import Single from './containers/Single';

//Components
import {Home} from './components/Home';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Switch>
            <Route exact path='/' component={Home} />
            <Route exact path='/category/:name' component={Category} />
            <Route exact path='/category/:category/:id' component={Single} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
