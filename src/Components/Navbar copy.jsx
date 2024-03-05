import { Nav, Navbar, NavDropdown, Badge } from 'react-bootstrap';
import "../assets/css/Navbar.css"
import { Store, ShoppingCart, SquareUser } from 'lucide-react';
import { useContext } from 'react';
import { ProductContext } from '../Context/ProductContext';

const Navigation = () => {
    const { quantityProduct} = useContext(ProductContext)

    const logo = "https://us.123rf.com/450wm/butenkov/butenkov2103/butenkov210300044/180573886-logotipo-vectorial-de-piezas-de-autom%C3%B3viles.jpg?ver=6"

    return (
        <Navbar expand="lg" className="navbar" fixed='top'>
            <Nav.Link href='/mainpage/home'><img src={logo} alt="logo" /></Nav.Link>
            <Navbar.Brand className="text-white ms-2" href="/mainpage/home">Autos Parts</Navbar.Brand>

            <Navbar.Collapse  >
                <Nav >
                    <Nav.Link className="text-white" href="/mainpage/home"><Store />Market</Nav.Link>
                    <Nav.Link className="text-white" href="/mainpage/shopping-cart"><ShoppingCart />Carrito <Badge bg="secondary">{quantityProduct()}</Badge>
                    </Nav.Link>
                    
                    <NavDropdown className='ms-5'  title={
                        <span className="text-white ms-4">Mi Cuenta</span>} >
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
        </Navbar>
    );
}

export default Navigation;
