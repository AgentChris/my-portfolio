import React, { Component } from 'react';
import './App.css';
import Chat from './components/Chat';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Articles from './components/Articles';
import Contact from './components/Contact';

import "./assets/scss/style.css";

class App extends Component {
  render() {
    return (<div>
      <Chat />
      <AboutMe />
      <Projects />
      <Articles />
      <Contact />
    </div>);
  }
}

export default App;
