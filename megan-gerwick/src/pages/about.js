import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import about from "../images/mgabout.png";
import Header from "../components/Header";
import Navigation from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import profilepic from "../images/profilepic.jpg";
import FooterComponent from "../components/Footer";
import "../App.css";

export default function AboutPage() {
    return (
        <Wrapper>
            <Header />
            <Navigation />
            <div>
                <Row>
                    <Col sm={12} className='center'>
                        <Image src={about} alt="logo" height={50} width={200} fluid />
                    </Col>
                </Row>
                <Row>
                    <Col sm={12} className='center'>

                        <Image src={profilepic} alt="profile picture" height={500} width={500} fluid />
                    </Col>
                </Row>
                <Row>
                    <Col sm={10}>
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

                    </Col>
                </Row>

                <Row>
                    <Col sm={4} className='center'>
                        <Button >Visit my GitHub</Button>
                    </Col>
                    <Col sm={4} className='center'>
                        <Button>Visit my LinkedIn</Button>
                    </Col>
                    <Col sm={4} className='center'>
                        <Button>Download my Resume</Button>
                    </Col>
                </Row>

            </div>
            <FooterComponent />
        </Wrapper>
    )
};