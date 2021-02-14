
import React, { Component } from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Wrapper from '../components/Wrapper';
import Navigation from '../components/Navbar';
import projectsimage from "../images/projects.png";
import ProjectCard from '../components/Card';
import skills from "../images/skills.png";
import projects from "../projects.json";
import Header from "../components/Header";
import FooterComponent from "../components/Footer";
import "../App.css";

class ProjectPage extends Component {
    state = {
        projects
    };


    render(projects) {
        return (
            <Wrapper>
                <Header />
                <Navigation />

                <Container fluid>

                    <Row >
                        <Col sm={12} className='center'>
                            <Image src={projectsimage} alt="logo" height={50} width={200} fluid />
                        </Col>
                    </Row>
                    <Row sm={10}>
                        <Col sm={12} className='center'>
                            {this.state.projects.map(project => (
                                <ProjectCard
                                    id={project.id}
                                    key={project.key}
                                    name={project.name}
                                    image={project.image}
                                    shot1={project.shot1}
                                    shot2={project.shot2}
                                    github={project.github}
                                    demo={project.github}
                                    description={project.description}
                                />
                            ))}
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={12} className='center' >
                            <Image className="center" src={skills} alt="logo" height={50} width={200} fluid />
                        </Col>
                    </Row>
                </Container>
                <FooterComponent />
            </Wrapper>
        )
    };
};
export default ProjectPage;
