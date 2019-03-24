import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Switch } from 'react-router-dom';

import SearchForm from './Components/SearchForm';
import MainNav from './Components/MainNav';
import PhotoContainer from './Components/PhotoContainer';
import Error from './Components/Error'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="container">
          <Route path="/" component={SearchForm} />
          <Route path="/" component={MainNav} />

          <Switch>
            <Route path="/search/:userInput" render={(props) => <PhotoContainer userInput={props.match.params.userInput} />} />
            <Route exact path="/" render={() => <PhotoContainer userInput="treehouse" />} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
