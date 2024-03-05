import { Form, Button, Row, Col } from 'react-bootstrap';
import "../assets/css/Access.css"
import { CircleUser } from 'lucide-react';
import { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import GoogleAuth from '../Components/GoogleAuth';

const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
const initialForm = { email: '', password: '' }

const Access = () => {
    const navigate = useNavigate()

    const [form, setForm] = useState(initialForm)
    const [errors, setErrors] = useState({})

    const setField = (field, value) => {
        setForm({ ...form, [field]: value })

        if (errors[field])
            setErrors({ ...errors, [field]: null })
    }

    const validateForm = () => {
        const { email, password } = form
        const newErrors = {}
        if (!email || email === '') newErrors.email = 'Ingrese email'
        else if (!emailRegex.test(form.email)) newErrors.email = 'El formato del email no es correcto'
        if (!password || password === '') newErrors.password = 'Ingrese password'

        return newErrors
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formErrors = validateForm()
        if (Object.keys(formErrors).length > 0) { setErrors(formErrors) }
        else {
            navigate('/mainpage')
        }
    }

    return (
        <div className="access text-white">
            <CircleUser />
            <Form >
                <Form.Group className="mb-3" >
                    <Form.Label>Correo Electronico</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresar Email"
                        value={form.email}
                        name='email'
                        onChange={(e) => setField('email', e.target.value)}
                        isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {errors.email}
                    </Form.Control.Feedback>
                    <Form.Text className="text-light">
                        Nunca Compartiremos este correo con otras personas.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contrasena</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        value={form.password}
                        name='password'
                        onChange={(e) => setField('password', e.target.value)}
                        isInvalid={!!errors.password} />
                    <Form.Control.Feedback type="invalid">
                        {errors.password}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3 buttons"  >
                    <Button
                        variant="outline-light"
                        type="submit"
                        onClick={handleSubmit} >Acceder
                    </Button>
                    <NavLink to="/register">
                        <Button variant="outline-light" type="submit" >Registrarse</Button>
                    </NavLink>
                </Form.Group>

                <Row>
                    <Col lg={12} className="d-flex justify-content-center">
                        <GoogleAuth></GoogleAuth>
                    </Col>
                </Row>
            </Form>
        </div>
    );
};

export default Access;