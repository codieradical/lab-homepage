import React from 'react';
import './App.css';

import { Switch } from 'react-router-dom';
import { Route } from 'react-router';

import Header from "./components/global/Header";
import Footer from "./components/global/Footer";

import Home from "./components/pages/Home";
import People from "./components/pages/People";
import Projects from "./components/pages/Projects";
import Error404 from "./components/pages/Error404";

export default class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header location={this.props.location}/>
        <div className="page">
          <Switch location={this.props.location}>
            <Route exact path="/" component={Home} />
            <Route exact path="/people" component={People} />
            <Route exact path="/projects" component={Projects} />
            <Route path="*" component={Error404} />
          </Switch>
          <Footer/> 
        </div>
      </div>
    );
  }
}