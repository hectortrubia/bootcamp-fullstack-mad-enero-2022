import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import {Link} from 'react-router-dom';


function Header() {

    return (
        <header>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/home">My Awsome Users</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link as={Link} to="/register">Registro</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </header>
    )
}


export default Header;