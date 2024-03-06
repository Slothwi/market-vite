import { Nav, Navbar, NavDropdown, Badge, Container } from 'react-bootstrap';
import "../assets/css/Navbar.css"
import { Store, ShoppingCart, SquareUser } from 'lucide-react';
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    const { quantityProduct } = useContext(ProductContext)

    const logo = "https://us.123rf.com/450wm/butenkov/butenkov2103/butenkov210300044/180573886-logotipo-vectorial-de-piezas-de-autom%C3%B3viles.jpg?ver=6"

    return (
        <Navbar expand="lg" className="navbar" fixed='top' variant="dark">
            <Container className='m-0'>
                <NavLink to='/mainpage/home'> <img src={logo} alt="logo" /> </NavLink>
                <Navbar.Brand className="text-white ms-2" href="/mainpage/home">Autos Parts</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-between ms-5" >
                    <Nav >
                        <NavLink className="text-white p-2" to='/mainpage/home'> <Store />Market </NavLink>
                        <NavLink className="text-white p-2" to='/mainpage/shopping-cart'><ShoppingCart />Carrito <Badge bg="secondary">{quantityProduct()}</Badge>
                        </NavLink>
                    </Nav >
                    <Nav >
                        <NavDropdown title={
                            <span className="text-white">Mi Cuenta</span>} >
                            <NavDropdown.Item href="/mainpage/mypublications">Mis Publicaciones</NavDropdown.Item>
                            <NavDropdown.Item href="/mainpage/historial">
                                Historial de Compra
                            </NavDropdown.Item>
                            <NavDropdown.Item href="/mainpage/publish">Publicar Artículo</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="/mainpage/config"><SquareUser /> Mi Perfil</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export default Navigation;
