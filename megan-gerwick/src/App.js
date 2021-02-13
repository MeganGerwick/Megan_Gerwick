
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Wrapper from './components/Wrapper';
import ProjectPage from "./pages/projects";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import Navigation from "./components/Navbar";




export default function App() {
  return (
    <Router>
      <Wrapper>
        <Route exact path="/" component={AboutPage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/projects" component={ProjectPage} />
        <Route exact path="/contact" component={ContactPage} />
      </Wrapper>
    </Router>
  )
};
