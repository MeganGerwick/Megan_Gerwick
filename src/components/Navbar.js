import { Navbar, Image, Nav } from 'react-bootstrap';
import favicon from "../images/mgfavi.png";


export default function Navigation() {
    return (
        <Navbar bg="white" expand="lg">
            <Navbar.Brand href="#home">
                <Image src={favicon} width={50} height={50} />
  Megan Gerwick</Navbar.Brand>

            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav.Link href="about">About Me</Nav.Link>
                <Nav.Link href="projects">Projects</Nav.Link>
                <Nav.Link href="contact">Contact</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    )
};