import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../assets/css/Config.css"
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Carrousel from '../Components/Carrousel';


const Config = () => {
   
    
    return (
        <>
            <Container className="access">
        <h2 className="text-white">Modifica tus Datos.</h2>
        <Form className="text-white">
            <Row>
            <Form.Label> Nombre y apellido:</Form.Label>
                <Col>
                    <Form.Control placeholder="Nombre" />
                </Col>
                <Col>
                    <Form.Control placeholder="Apellido" />
                </Col>
            </Row>
            <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Tu Correo:</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
            <hr />
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Tu Contraseña:</Form.Label>
            <Form.Control type="password" placeholder="Contraseña" />
        </Form.Group>
        <div className="buttons">
            <NavLink to="/MainPage/Profile">
                <Button variant="outline-danger" type="submit">
                    Cancelar
                </Button>
            </NavLink>
            <Button variant="outline-light" type="submit">
                Modificar
            </Button>
        </div>
    </Form>
    </Container>
    <Container>
        <Carrousel />
    </Container>
        </>
    );
}

export default Config;