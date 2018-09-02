import React, { Component } from 'react';
import Home from './pages/Home';
import SideMenu from './components/SideMenu';
import{
  Switch,
  Route,
  BrowserRouter as Router
}from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path='/' component={Home}/>  
          <Route path='/side' component={SideMenu}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
