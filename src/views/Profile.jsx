import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";
import Carrousel from "../components/Carrousel";
import { useUserContext } from "../context/UserContext";



const Profile = () => {

    const { userData } = useUserContext();


    return (
    <>
        <Container className="access">
        <h2 className="text-white">Aqui Puedes Ver Y Modificar tus Datos.</h2>
        <Form className="text-white">
            <Row>
            <Form.Label> Nombre y apellido:</Form.Label>
                <Col>
                    <Form.Control 
                        name="nuevoNombre"
                        value={userData.nuevoNombre} 
                        placeholder="Nombre"
                        disabled/>
                </Col>
                <Col>
                    <Form.Control 
                        name="nuevoApellido"
                        value={userData.nuevoApellido}
                        placeholder="Apellido" 
                        disabled/>
                </Col>
            </Row>
            <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tu Correo:</Form.Label>
            <Form.Control 
                name="nuevoCorreo"
                value={userData.nuevoCorreo}
                type="email" 
                placeholder="Enter email" 
                disabled/>
        </Form.Group>
            <hr />
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tu Contraseña:</Form.Label>
            <Form.Control 
                name="nuevaContraseña"
                value={userData.nuevaContraseña}
                type="password" 
                placeholder="Contraseña" 
                disabled/>
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicImg">
            <Form.Label>Tu Imagen:</Form.Label>
            <Form.Control 
                name="nuevaImagen"
                value={userData.nuevaImagen}
                type="Img" 
                placeholder="URL de Imagen" 
                disabled/>
        </Form.Group>
        <div className="buttons">
            <NavLink to="/MainPage/home">
                <Button variant="outline-light" type="submit">
                    Seguir Comprando
                </Button>
            </NavLink>
            <NavLink to="/MainPage/Config">
            <Button variant="outline-light" type="submit">
                Modificar
            </Button>
            </NavLink>
        </div>
    </Form>
    </Container>
    <Container>
        <Carrousel />
    </Container>
    </>
    );
};

export default Profile;