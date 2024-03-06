import { Container, Nav } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from "react-router-dom";



const Profile = () => {


    return (
    <Container className="access">
        <h2 className="text-white">Aqui Puedes Ver Y Modificar tus Datos.</h2>
        <Form className="text-white">
            <Row>
            <Form.Label> Nombre y apellido:</Form.Label>
                <Col>
                    <Form.Control placeholder="Nombre" disabled/>
                </Col>
                <Col>
                    <Form.Control placeholder="Apellido" disabled/>
                </Col>
            </Row>
            <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tu Correo:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" disabled/>
        </Form.Group>
            <hr />
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tu Contraseña:</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" disabled/>
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
    );
};

export default Profile;