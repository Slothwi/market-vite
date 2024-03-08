import { Nav, Navbar, NavDropdown, Badge, Container } from 'react-bootstrap';
import "../assets/css/Navbar.css"
import { Store, ShoppingCart, SquareUser, CircleUser, ArrowUpFromLine, History, BookText } from 'lucide-react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
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
                            <span className="text-white"><CircleUser/>Mi Cuenta</span>} >
                            <NavDropdown.Item ><NavLink to="/MainPage/Mypublications" className="text-dark"><BookText/>Mis Publicaciones</NavLink></NavDropdown.Item>
                            <NavDropdown.Item ><NavLink to="/MainPage/Historial" className="text-dark"><History/>Historial De Compra</NavLink></NavDropdown.Item>
                            <NavDropdown.Item ><NavLink to="/MainPage/Publish" className="text-dark"><ArrowUpFromLine/>Publicar Articulo</NavLink></NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item ><NavLink to="/MainPage/Profile" className="text-dark"><SquareUser /> Mi Perfil</NavLink></NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export default Navigation;
