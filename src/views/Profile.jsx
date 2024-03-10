import { useContext } from 'react';
import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { UserContext } from '../context/UserContext'

const Profile = () => {

    const { userData } = useContext(UserContext)
    const userDataNuevo = userData
    
    console.log(userDataNuevo)

    return (
        <>
            <Container className="access">
                <h3 className="text-white">Datos Personales</h3>
                <Form className="text-white mt-3">
                    <Row>
                        <Form.Label> Nombre y apellido:</Form.Label>
                        <Col>
                            <Form.Control
                                name="nuevoNombre"
                                value={userDataNuevo.nombre}
                                placeholder="Nombre"
                                 />
                        </Col>
                    </Row>
                    <hr />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tu Correo:</Form.Label>
                        <Form.Control
                            name="nuevoCorreo"
                            value={userDataNuevo.email}
                            type="email"
                            placeholder="Enter email"
                            disabled />
                    </Form.Group>
                    <hr />
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Tu Contraseña:</Form.Label>
                        <Form.Control
                            name="nuevaContraseña"
                            // value={userData.nuevaContraseña}
                            type="password"
                            placeholder="Contraseña"
                            disabled />
                    </Form.Group>
                    <hr />
                    <Form.Group className="mb-3" controlId="formBasicImg">
                        <Form.Label>Tu Imagen:</Form.Label>
                        <Form.Control
                            name="nuevaImagen"
                            value={userDataNuevo.avatar}
                            type="Img"
                            placeholder="URL de Imagen"
                            disabled />
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

        </>
    );
};

export default Profile;