import React, { Component } from 'react';
import './App.css';
import Layout from './components/Layout';
import Chat from './components/Chat';
import AboutMe from './components/about-me';
import Projects from './components/projects';
import Articles from './components/Articles';
import Contact from './components/Contact';

import "./assets/scss/style.css";

class App extends Component {
  render() {
    return (<Layout>
      <Chat />
      <AboutMe />
      <Projects />
      <Articles />
      <Contact />
    </Layout>);
  }
}

export default App;
