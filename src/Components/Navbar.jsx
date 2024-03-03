import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "../assets/css/Navbar.css"
import { Store, ShoppingCart, SquareUser } from 'lucide-react';


function Navigation() {
    const logo = "https://us.123rf.com/450wm/butenkov/butenkov2103/butenkov210300044/180573886-logotipo-vectorial-de-piezas-de-autom%C3%B3viles.jpg?ver=6"

    return (
        <Navbar expand="lg" className="navbar" fixed='top'>
            <Nav.Link href='/mainpage/home'><img src={logo} alt="logo" /></Nav.Link>
            <Navbar.Brand className="text-white ms-2" href="/mainpage/home">Autos Parts</Navbar.Brand>
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-4">
                    <Nav.Link className="text-white" href="/mainpage/home"><Store />Market</Nav.Link>
                    <Nav.Link className="text-white" href="/mainpage/carritoCompras"><ShoppingCart />Carrito</Nav.Link>
                    <NavDropdown title={
                        <span className="text-white ms-4">Mi Cuenta</span>} >
                        <NavDropdown.Item href="/mainpage/ventas">Mis Publicaciones</NavDropdown.Item>
                        <NavDropdown.Item href="/mainpage/historial">
                            Historial de Compra
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/mainpage/publicar">Publicar Artículo</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="/mainpage/profile"><SquareUser /> Mi Perfil</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navigation;
