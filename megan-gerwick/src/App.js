
import './App.css';
import React, { Component } from 'react';
import { Container, Row, Col, Image, Button, Navbar, Nav, } from 'react-bootstrap';
import Wrapper from './components/Wrapper';
import logo from "./images/headerlogo.png";
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
        <header>
          <Row>
            <Col sm={12}>
              <Image className="center" src={logo} alt="logo" height={100} width={700} fluid />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Button variant="outline-primary">View My Work</Button>
            </Col>
          </Row>
          <Container>
            <Row>
              <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">
                  <Image src={favicon} width={50} height={50} />
                  Megan Gerwick</Navbar.Brand>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav.Link href="#About">About Me</Nav.Link>
                  <Nav.Link href="#Skills">Skills and Technologies</Nav.Link>
                  <Nav.Link href="#Projects">Projects</Nav.Link>
                  <Nav.Link href="#Contact">Contact</Nav.Link>
                </Navbar.Collapse>
              </Navbar>
            </Row>
          </Container>
        </header>
        <Container fluid="sm">
          <Row>
            <Col sm={10}>
              <Image className="center" src={about} alt="logo" height={50} width={200} fluid />
            </Col>
          </Row>
          <Row>
            <p>I was born in Wichita, KS and traveled to the Kansas
            City area to complete two bachelor's degrees in Secondary Education and English. While teaching
            high school English in Raytown, MO, I completed my master's degree in Curriculum and Instruction
                        with an emphasis in reading comprehension.</p>

            <p>After teaching for 10 years, I decided to try a new
            path and jumped into a six-month coding
          bootcamp through the University of Kansas. During that course, I developed a passion for coding and learning new technologies. </p>

            <p>In my free time, I love to cross stitch
            overly-complicated desings. I have also been known to make hundreds of cookies and then
            intricately ice them. But my favorite hobby of all is barbershop singing. I sing with the chorus
                        Vocal Standard and with my newly-formed quartet Fly Girls.</p>
          </Row>
          <Row>
            <Col sm={10}>
              <Image className="center" src={skills} alt="logo" height={50} width={200} fluid />
            </Col>
          </Row>
          <Row>
            <Col sm={10}>
              <Image className="center" src={projects} alt="logo" height={50} width={200} fluid />
            </Col>
          </Row>
          <Row>
            {this.state.projects.map(project => (
              <ProjectCard
                id={project.id}
                key={project.id}
                name={project.name}
                image={project.image}
                description={project.description}
              />
            ))}
          </Row>
          <Row>
            <Col sm={10}>
              <Image className="center" src={contact} alt="logo" height={50} width={200} fluid />
            </Col>
          </Row>
        </Container>
      </Wrapper>
    )
  };
};
export default App;
