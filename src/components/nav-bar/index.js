import { Navbar, Container, Nav, Button } from "react-bootstrap";
import "./NavBar.css";
import logo from "./banner-logo.png";

const NavBar = (props) => {
  const links = props.links.map((l, i) => (
    <Nav.Link href={l.href}>{l.name}</Nav.Link>
  ));

  links.push(
    <Button
      className="w-[160px]"
      variant="outline-info"
      href="https://forms.gle/xfaNxqCVWMWQkgQn9"
      target="_blank"
    >
      Contact Us
    </Button>
  );

  return (
    <Navbar className="nav-bar" bg="dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="170"
            height="70"
            className="d-inline-block align-top"
            alt="HyperDapp"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" />
          <Nav>{links}</Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
