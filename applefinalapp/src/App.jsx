import React, { Component } from 'react'
import {Router,Switch,Route} from react-router-dom;


import Navigation from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Main from './components/main/Main';

import "./css/styles.css";
function App() {
  return (
    <Router>
      <div>
        <Navigation/>
        <Switch>
          <Route path="/"/>
        </Switch>
      </div>
    </Router>
  );
}

export default App