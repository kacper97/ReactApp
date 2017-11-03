import React, { Component } from 'react';
import {
	BrowserRouter as Router,
	Route,
	Link
	} from 'react-router-dom';

//components
import Header from './components/headerComponent/header';
import Homepage from './components/pages/homePage';
import Team from './components/pages/team';
//includes
import './Assets/css/default.min.css'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
      
      <Header />

      	<Route exact path='/' component={Homepage} />
      	<Route exact path='/team' component={Team} />

      </div>
      </Router>
    );
  }
}

export default App;
