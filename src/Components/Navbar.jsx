import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../assets/css/Navbar.css"

function Navigation () {

    return (
        <Navbar expand="lg" className="navbar" fixed='top'>
        <Container>
            <Navbar.Brand href="#home">Autos Parts</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/Ventas">Carrito</Nav.Link>
            <NavDropdown title="Mi Cuenta" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Mis Publicaciones</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                Historial de Compra
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Publicar Artículo</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                Configuraciones
                </NavDropdown.Item>
            </NavDropdown>
        </Nav>
    </Navbar.Collapse>
    </Container>
    </Navbar>
    );
}

export default Navigation;