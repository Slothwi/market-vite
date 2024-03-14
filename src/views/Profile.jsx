import { Container, Row, Form, Button, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';

const Profile = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({ email: '', newName: '', newImage: '', newPassword: '' });
    const [errors, setErrors] = useState({})

    const fetchData = () => {
        const userData = window.sessionStorage.getItem('userData') !== null ?
            JSON.parse(window.sessionStorage.getItem('userData')) : null

        setFormData({ email: userData.email, newName: userData.nombre, newImage: userData.avatar, newPassword: '' })
    }

    const handleChange = (field, value) => {
        setFormData({ ...formData, [field]: value })

        if (errors[field])
            setErrors({ ...errors, [field]: null })
    }

    const validateForm = () => {
        const { newName, newImage, newPassword } = formData
        const newErrors = {}
        if (!newName || newName.trim() === '') {
            newErrors.newName = 'Ingrese Nombre'
        }

        if (!newImage || newImage.trim() === '') {
            newErrors.newImage = 'Ingrese url Imagen'
        }

        if (!newPassword || newPassword.trim() === '') {
            newErrors.newPassword = 'Ingrese Nueva Password'
        }

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formErrors = validateForm()
        if (Object.keys(formErrors).length > 0) { setErrors(formErrors) }
        else {
            console.log('Modificando datos')
        }
    };


    useEffect(() => {
        fetchData()        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            <Container className="access">
                <h3 className="text-white">Datos Personales</h3>
                <Form className="text-white mt-3">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Tu Correo:</Form.Label>
                        <Form.Control
                            readOnly
                            value={formData.email}
                            type="email"
                            placeholder="email"
                        />
                    </Form.Group>
                    <hr />

                    <Row>
                        <Form.Label> Nombre y apellido:</Form.Label>
                        <Col>
                            <Form.Control
                                name="newName"
                                value={formData.newName}
                                onChange={(e) => handleChange('newName', e.target.value)}
                                type="text"
                                isInvalid={!!errors.newName}
                            />
                            <Form.Control.Feedback type="invalid">
                                {errors.newName}
                            </Form.Control.Feedback>
                        </Col>
                    </Row>
                    <Form.Group className="mb-3 mt-3" controlId="formBasicImg">
                        <Form.Label>Tu Imagen:</Form.Label>
                        <Form.Control
                            name="newImage"
                            value={formData.newImage}
                            onChange={(e) => handleChange('newImage', e.target.value)}
                            type="text"
                            isInvalid={!!errors.newImage}
                        />
                        <Form.Control.Feedback type="invalid">
                            {errors.newImage}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <hr />

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Modificar Contraseña:</Form.Label>
                        <Form.Control
                            name="newPassword"
                            value={formData.newPassword}
                            type="password"
                            onChange={(e) => handleChange('newPassword', e.target.value)}
                            isInvalid={!!errors.newPassword} />
                        <Form.Control.Feedback type="invalid">
                            {errors.newPassword}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <hr />

                    <div className="buttons">
                        <Button variant="outline-light" onClick={() => navigate('/mainpage/home')}>
                            Seguir Comprando
                        </Button>
                        <Button variant="outline-light" onClick={handleSubmit}  >
                            Modificar Datos
                        </Button>
                    </div>
                </Form>
            </Container>

        </>
    );
};

export default Profile;