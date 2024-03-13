import { Nav, Navbar, Badge, Dropdown, NavDropdown } from 'react-bootstrap';
import "../assets/css/Navbar.css"
import { Store, ShoppingCart, SquareUser, CircleUser, ArrowUpFromLine, History, BookText, LogOut } from 'lucide-react';
import { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { NavLink, useNavigate } from 'react-router-dom';


const Navigation = () => {
    const { quantityProduct } = useContext(ProductContext)
    const navigate = useNavigate()
    const userData = window.sessionStorage.getItem('userData') !== null ?
        JSON.parse(window.sessionStorage.getItem('userData')) : null

    const logo = "https://us.123rf.com/450wm/butenkov/butenkov2103/butenkov210300044/180573886-logotipo-vectorial-de-piezas-de-autom%C3%B3viles.jpg?ver=6"

    const closeSession = () =>{
        window.sessionStorage.removeItem('token')
        window.sessionStorage.removeItem('userData')
        navigate('/')
    }

    return (
        <Navbar expand="lg" className="navbar p-2" fixed='top' variant="dark">
            <NavLink to='/mainpage/home'> <img className='img-logo' src={logo} alt="logo" /> </NavLink>
            <Navbar.Brand className="text-white ms-2" href="/mainpage/home">Autos Parts</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-between ms-5" >
                <Nav  >
                    <NavLink className="text-white p-2 nav_menu" to='/mainpage/home'> <Store />Market </NavLink>
                    <NavLink className="text-white p-2 nav_menu" to='/mainpage/shopping-cart'><ShoppingCart />Carrito <Badge bg="secondary">{quantityProduct()}</Badge>
                    </NavLink>
                </Nav >

                <Nav  >
                    <NavDropdown align="end" title={
                        <span className="text-white"> {userData?.nombre} <CircleUser /></span>} >
                        <Dropdown.Item as={NavLink} to="/MainPage/Mypublications"><BookText />  Mis Publicaciones</Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/MainPage/Historial"><History /> Historial De Compra</Dropdown.Item>
                        <Dropdown.Item as={NavLink} to="/MainPage/Publish"><ArrowUpFromLine /> Publicar Articulo</Dropdown.Item>
                        <NavDropdown.Divider />
                        <Dropdown.Item as={NavLink} to="/MainPage/Profile"><SquareUser /> Mi Perfil</Dropdown.Item>
                        <Dropdown.Item onClick={closeSession}><LogOut /> Cerrar Sesion</Dropdown.Item>
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>

        </Navbar >
    );
}
export default Navigation;
