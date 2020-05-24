import React, { Component } from 'react';
import Portfolio from './Portfolio';
import About from './About';
import Resume from './Resume';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div className="container nav-component">
              <div className="row justify-content-start">
                <div className="col-sm-2 col-lg-1"><NavLink exact to="/" activeClassName="selected-nav">Portfolio</NavLink></div>
                <div className="col-sm-2 col-lg-1"><NavLink to="/about" activeClassName="selected-nav">About</NavLink></div>
                <div className="col-sm-2 col-lg-1"><NavLink to="/resume" activeClassName="selected-nav">Resume</NavLink></div>
              </div>
            </div>
          </header>
          <Switch>
            <Route exact path="/" component={Portfolio}/>
            <Route path="/about" component={About}/>
            <Route path="/resume" component={Resume}/>
          </Switch>
          <footer className="text-muted">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-left">
                  <p>Tyler Davis</p>
                  <p>Front End Developer</p>
                </div>
                <div className="col-md-4 text-left">
                  <p>89052</p>
                  <p>Henderson, NV</p>
                </div>
                <div className="col-md-4 text-left">
                  <p>tylerkoreydavis@gmail.com</p>
                  <p>(925)334-6001</p>
                </div>
              </div>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;
