import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Outlet, Link } from 'react-router-dom';

function Header() {
    return (
      <>
        <Navbar fixed="top" bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand>
              <Link to='/'>Home</Link>
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <Link to='/temp'>Temperature</Link>
              </Nav.Link>
                
                <Nav.Link href="#pricing">Pricing</Nav.Link>
              </Nav>
          </Container>
        </Navbar>

        <Outlet />
        
      </>
    );
  }

export default Header;