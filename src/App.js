import React, { Component } from 'react';
import bidtracker from './bidtrackerss.jpg';
import bidtrackerlogo from './bidtracker.png';
import robomock from './robofriendsmock.jpg';
import './App.css';



class App extends Component {

  // componentWillMount() {
  //   addEventListener();
  // }

  render() {
    return (
      <div className="App">
          <header>
    <div className="container nav-component">
      <div className="row justify-content-start">
        <div className="col-sm-2 col-lg-1"><a href="" className="selected-nav">Portfolio</a></div>
        <div className="col-sm-2 col-lg-1"><a href="">About</a></div>
        <div className="col-sm-2 col-lg-1"><a href="">Resume</a></div>
      </div>
    </div>
  </header>

  <main role="main">

    <section className="jumbotron text-center">
      <div className="watch-face">
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
      <div className="container">
        <h1 className="jumbotron-heading serif-header">Tyler Davis</h1>
        <p className="lead text-muted">Hi, I am a front end developer with full stack experience.</p>
      </div>
    </section>

    <div className="album py-5 bg-light">
      <div className="container">

        <div className="row">
          <div className="col-md-8">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" data-src={bidtracker} alt="Thumbnail [100%x225]" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-holder-rendered="true"></img>
              <div className="card-body">
                <p className="card-text">Alleviate the difficulties of job estimation, analytics, and tracking for construction contractor bids. Allows for import of spreadsheet data and roadmap on personal sales performance.</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" alt="Thumbnail [100%x225]" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src={robomock} data-holder-rendered="true"></img>
              <div className="card-body">
                <p className="card-text">Robofriends is a React/Redux application with emphasis on concepts like DRY, componentizing, containers, and knowledge of effective use of middleware like Thunk.js</p>
              </div>
            </div>
          </div>
          <div className="col-md-12">
            <div className="card mb-4 box-shadow iframe-scroll-wrapper">
              <iframe title="spider web interactive" aria-hidden="true" width="100%" height="500" src='' data-src="//jsfiddle.net/Datadazer/4yb106jq/2/embedded/result/" allowFullScreen="allowfullscreen" frameBorder="0"></iframe>
              <div className="card-body">
                <p className="card-text">A pure D3 force-directed interactive spider web. Designed for Bolt Threads' HR Career Web. Try me! Click and Drag a node on the web. </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-4 box-shadow">
              <img className="card-img-top" alt="Thumbnail [100%x225]" src="data:image/png;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=" data-src={bidtrackerlogo} data-holder-rendered="true"></img>
              <div className="card-body">
                <p className="card-text">Logo designed with Inkscape. Focus on a more modern look with motion since speed and accuracy are important in a Sales Bid environment.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>

  </main>

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
    );
  }
}

export default App;
