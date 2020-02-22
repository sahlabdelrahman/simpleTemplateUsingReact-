import React, { Component } from 'react';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Work from './Components/Work';
import Portfolio from './Components/portfolio';
import Profile from './Components/Profile';
import Contact from './Components/Contact';
import About from './Components/About';
import SocialMedia from './Components/SocialMedia';
import Footer from './Components/Footer';
import Index from './Components/Index';
import {BrowserRouter, Route} from 'react-router-dom';

class App extends Component {
  render () {
    return (
      <BrowserRouter>
        <Navbar />
        <Route exact path='/' component={Index} />
        <Route path='/contact' component={Contact} />
      </BrowserRouter>
    );
  }
  
}

export default App;
