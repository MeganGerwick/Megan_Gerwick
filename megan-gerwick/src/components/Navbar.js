import { Navbar, Image, Nav } from 'react-bootstrap';
import favicon from "./images/mgfavi.png";

export default function Navigation() {
    return (
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
    )
};