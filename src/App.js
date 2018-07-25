import React, { Component } from 'react';
import Portfolio from './Portfolio';
import About from './About';
import Resume from './Resume';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  NavLink
} from 'react-router-dom'
/*see if react dom works on heroku deploy*/

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <header>
            <div className="container nav-component">
              <div className="row justify-content-start">
                <div className="col-sm-2 col-lg-1"><NavLink exact to="/" activeClassName="selected-nav">Portfolio</NavLink></div>
                <div className="col-sm-2 col-lg-1"><NavLink exact to="/about" activeClassName="selected-nav">About</NavLink></div>
                <div className="col-sm-2 col-lg-1"><NavLink exact to="/resume" activeClassName="selected-nav">Resume</NavLink></div>
              </div>
            </div>
          </header>
          <Route exact path="/" component={Portfolio}/>
          <Route path="/about" component={About}/>
          <Route path="/resume" component={Resume}/>
          <footer className="text-muted">
            <div className="container">
              <div className="row">
                <div className="col-md-4 text-left">
                  <p>Tyler Davis</p>
                  <p>Front End Developer</p>
                </div>
                <div className="col-md-4 text-left">
                  <p>80904</p>
                  <p>Colorado Springs, CO</p>
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
