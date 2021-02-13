
import './App.css';
import React, { Component } from 'react';
import { Container, Row, Col, Image, Button, Navbar, Nav, } from 'react-bootstrap';
import Wrapper from './components/Wrapper';

import about from "./images/mgabout.png";
import skills from "./images/skills.png";
import favicon from "./images/mgfavi.png";
import projects from "./images/projects.png";
import contact from "./images/contact.png";
import ProjectCard from './components/Card';

class App extends Component {
  state = {
    projects
  };


  render() {
    return (
      <Wrapper>
        <Header />
        <Navbar />

        <Row>
          <Col sm={10}>
            <Image className="center" src={skills} alt="logo" height={50} width={200} fluid />
          </Col>
        </Row>
        
        </Container>
      </Wrapper >
    )
  };
};
export default App;
