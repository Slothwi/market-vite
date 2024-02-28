import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "../assets/css/Navbar.css"
import { Store,ShoppingCart } from 'lucide-react';

function Navigation() {
    const logo = "https://us.123rf.com/450wm/butenkov/butenkov2103/butenkov210300044/180573886-logotipo-vectorial-de-piezas-de-autom%C3%B3viles.jpg?ver=6"

    return (
        <Navbar expand="lg" className="navbar" fixed='top'>
        <Nav.Link href='/'><img src={logo} alt="logo" /></Nav.Link>
        <Container>
            <Navbar.Brand className="text-white" href="/">Autos Parts</Navbar.Brand>
            
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
            <Nav.Link className="text-white" href="/"><Store />Market</Nav.Link>
            <Nav.Link className="text-white" href="/Ventas"><ShoppingCart />Carrito</Nav.Link>
            <NavDropdown title={
                            <span className="text-white  my-auto">Mi Cuenta</span>} >
      
                <NavDropdown.Item href="/ventas">Mis Publicaciones</NavDropdown.Item>
                <NavDropdown.Item href="/Historial">
                Historial de Compra
                </NavDropdown.Item>
                <NavDropdown.Item href="/Publicar">Publicar Artículo</NavDropdown.Item>
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

