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
import Facts from './components/pages/facts';
import History from './components/pages/history';
import Origin from './components/pages/origin';
import Sights from './components/pages/sights';
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
        <Route exact path='/facts' component={Facts} />
        <Route exact path='/history' component={History} />
        <Route exact path='/origin' component={Origin}/>
        <Route exact path='/sights' component={Sights}/>

      </div>
      </Router>
    );
  }
}

export default App;
