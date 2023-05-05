import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function ResponsiveAppBar() {
    return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky='top' className='self-stretch justify-self-start'>
    <Container>
      <Navbar.Brand href="#home">UACS</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav" className='justify-content-end'>
        <Nav className=''>
          <Nav.Link eventKey={2} href="#memes" className='mr-5'>
            Community
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className='mr-5'>
            Lockers
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className='mr-5'>
            Hoodies
          </Nav.Link>
          <Nav.Link eventKey={2} href="#memes" className='mr-5'>
            Events
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
}
export default ResponsiveAppBar;