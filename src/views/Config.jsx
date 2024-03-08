import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../assets/css/Config.css"
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Carrousel from '../components/Carrousel';
import React, {useState} from 'react';
import { useUserContext } from '../context/UserContext';


const Config = () => {

    const { userData, setUserData } = useUserContext();

    // Almacenar nuevos  Datos
    const [formData, setFormData] = useState ({
        nuevoNombre: '',
        nuevoApellido: '',
        nuevoCorreo: '',
        nuevaContraseña: '',
        urlImagen: ''
    });


    // Manejar cambios al act estado de datos del form.

    const handleChange = (e) => {
        const {name, value} = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };
    
    // Manejo de envio form.

    const handleSubmit = (e) => {
        e.preventDefault();
        //pendiente funcion
        console.log('Datos del form:', formData);
    };

    //Funcion para modificar

    const handleModificar = () => {
        //logica para modificacion
        console.log('Datos Modificados:', userData)
    };

    return (
        <>
            <Container className="access">
        <h2 className="text-white">Modifica tus Datos.</h2>
        <Form className="text-white" onSubmit={handleSubmit}>
            <Row>
            <Form.Label>Cambia tú Nombre y apellido:</Form.Label>
                <Col>
                    <Form.Control 
                        name="nuevoNombre"
                        value={userData.nuevoNombre}
                        onChange={handleChange}
                        placeholder="Nuevo Nombre" />
                </Col>
                <Col>
                    <Form.Control 
                        name="nuevoApellido"                        
                        value={userData.nuevoApellido}
                        onChange={handleChange}
                        placeholder="Nuevo Apellido" />
                </Col>
            </Row>
            <hr />
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Cambia Tú Correo:</Form.Label>
            <Form.Control 
                name="nuevoCorreo"
                value={userData.nuevoCorreo}
                onChange={handleChange}
                type="email" 
                placeholder="Nuevo Correo" />
        </Form.Group>
            <hr />
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Cambia Tú Contraseña:</Form.Label>
            <Form.Control 
                name="nuevaContraseña"
                value={userData.nuevaContraseña}
                onChange={handleChange}
                type="password"
                placeholder="Nueva Contraseña" />
        </Form.Group>
        <hr />
        <Form.Group className="mb-3" controlId="formBasicLogo">
            <Form.Label>Cambia tu imagen</Form.Label>
            <Form.Control
                name="urlImagen"
                value={userData.urlImagen}
                onChange={handleChange}
                type="text"
                placeholder="URL de imagen" />
        </Form.Group>
        <div className="buttons">
            <NavLink to="/MainPage/Profile">
                <Button variant="outline-danger" type="submit">
                    Cancelar
                </Button>
            </NavLink>
            <Button variant="outline-light" type="submit" onClick={handleModificar}>
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