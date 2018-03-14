import React, { Component } from 'react';
import { Provider } from "react-redux";
import { routerMiddleware } from 'react-router-redux';

import createHistory from 'history/createBrowserHistory';

import { configureStore } from './configureStore';
import './App.css';
import Layout from './components/Layout';
import Chat from './components/chat';
import AboutMe from './components/about-me';
import Projects from './components/projects';
import Articles from './components/Articles';
import Contact from './components/Contact';

import "./assets/scss/style.css";

const history = createHistory({ basename: "my-portofolio" });

// Build the middleware for intercepting and dispatching navigation actions
const middleware = routerMiddleware(history);

export const store = configureStore(middleware);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
          <Layout>
            <Chat />
            <AboutMe />
            <Projects />
            <Articles />
            <Contact />
          </Layout>
      </Provider>);
  }
}

export default App;
