import { Nav, Navbar, Badge, Container, Dropdown, NavDropdown } from 'react-bootstrap';
import "../assets/css/Navbar.css"
import { Store, ShoppingCart, SquareUser, CircleUser, ArrowUpFromLine, History, BookText } from 'lucide-react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../context/UserContext'

const Navigation = () => {
    const { quantityProduct } = useContext(ProductContext)
    const { userData } = useContext(UserContext)

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
                            <span className="text-white"> {userData.nombre} <CircleUser /></span>} >
                            <Dropdown.Item as={NavLink} to="/MainPage/Mypublications"><BookText />Mis Publicaciones</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/MainPage/Historial"><History />Historial De Compra</Dropdown.Item>
                            <Dropdown.Item as={NavLink} to="/MainPage/Publish"><ArrowUpFromLine />Publicar Articulo</Dropdown.Item>
                            <NavDropdown.Divider />
                            <Dropdown.Item as={NavLink} to="/MainPage/Profile"><SquareUser /> Mi Perfil</Dropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar >
    );
}
export default Navigation;
