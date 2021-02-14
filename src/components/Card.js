import { React, useState } from 'react';
import { Card, Button, Modal, Image } from 'react-bootstrap';



export default function ProjectCard(props) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.image} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>
                    <Button variant="primary" onClick={handleShow}>
                        See More
                     </Button>
                </Card.Body>
            </Card>
            <Modal show={show} size="lg" onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h3>Checkout the github here: {props.github}</h3>
                    <h3>Checkout the live site or demo here: {props.demo}</h3>
                    <Image src={props.shot1} />
                    <Image src={props.shot2} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>

    );
};