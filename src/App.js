import React from 'react';
import Navbar from './components/Navbar.jsx';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home'


function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/' />
          <Route path='/' />
          <Route path='/' />
          
        </Switch>
      </Router>
      
    </>

  );
}

export default App;
