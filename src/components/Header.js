import React from 'react';
import { Row, Col, Image, } from 'react-bootstrap';
import logo from "../images/headerlogo.png";


export default function Header() {
    return (
        <Row>
            <Col sm={12} className='center'>
                <Image className="center" src={logo} alt="logo" height={100} width={700} fluid />
            </Col>
        </Row >
    )
};