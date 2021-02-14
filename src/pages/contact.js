import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';
import contact from "../images/contact.png";
import Header from "../components/Header";
import Navigation from "../components/Navbar";
import Wrapper from "../components/Wrapper";
import FooterComponent from "../components/Footer";

export default function ContactPage() {
    return (
        <Wrapper>
            <Header />
            <Navigation />
            <Row>
                <Col sm={12} className='center'>
                    <Image className="center" src={contact} alt="logo" height={50} width={200} fluid />
                </Col>
            </Row>
            <Row>
                <Col className='center'>
                    <h2>Email: gerwickmegan@gmail.com</h2>
                </Col>
            </Row>
            <Row>
                <Col className='center'>
                    <h2>GitHub:  https://github.com/MeganGerwick</h2>
                </Col>
            </Row>
            <Row>
                <Col className='center'>
                    <h2>Phone Number:  Available through my resume</h2>
                </Col>
            </Row>
            <Row>
                <Col className='center'>
                    <Button>Download my Resume</Button>
                </Col>
            </Row>
            <FooterComponent />
        </Wrapper>
    )
};