import {Container, Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import "./header.css";

const Header= () =>{
    return(
        <>
        <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">CRUD App</Navbar.Brand>
          <Nav className="m1-auto">
            <Nav.Link as={Link} to="/" className='nav-link'>Dashboard</Nav.Link>
            <Nav.Link as={Link} to="/users" className='nav-link'>Post</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

        </>
    )
}
export default Header;