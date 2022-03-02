import {
  Navbar,
  Container,
  Nav,
  NavDropdown
} from 'react-bootstrap';
import './NavBar.css';
import logo from './banner-logo.png';

const NavBar = props => {
  const links = props.links.map((l, i) => <Nav.Link href={l.href}>{l.name}</Nav.Link>);

  return (
    <Navbar className='nav-bar' bg="dark" expand="lg">
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
          <Nav className="me-auto"></Nav>
          <Nav>
            {links}
          </Nav>
      </Container>
    </Navbar>
  );
}

export default NavBar;
