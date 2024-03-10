import { Container, Form, Button } from 'react-bootstrap'
import "../assets/css/Access.css"
import { useState } from 'react'
import { registerUser, loginUser } from "../services/UserServices";
import { useNavigate } from 'react-router-dom';
import SweetAlert2 from 'react-sweetalert2'

const iniForm = { name: '', email: '', password1: '', password2: '' }
const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i

const Register = () => {
    const navigate = useNavigate()

    const [swalProps, setSwalProps] = useState({});

    const [form, setForm] = useState(iniForm)
    const [error, setError] = useState({})

    const setField = (field, value) => {
        setForm({ ...form, [field]: value })

        if (error[field])
            setError({ ...error, [field]: null })
    }

    const validateForm = () => {
        const { name, email, password1, password2 } = form
        const newError = {}
        if (!name || name === '') {
            newError.name = 'Ingrese nombre'
        }

        if (!email || email === '')
            newError.email = 'Ingrese email'
        else if (!emailRegex.test(form.email))
            newError.email = 'El formato del email no es correcto'

        if (!password1 || password1 === '')
            newError.password1 = 'Ingrese Contraseña'

        if (!password2 || password2 === '')
            newError.password2 = 'Ingrese Contraseña'

        if (password1 != password2)
            newError.password2 = 'Contraseñas deben ser iguales'

        return newError
    }

    const regUser = async () => {
        setSwalProps({})
        //Valida que el usuario ya este registrado
        const user = { email: form.email, password: form.password }
        const resp = await loginUser(user)
        if (resp.status == 200)
            setSwalProps({ show: true, title: 'Informacion', text: 'Usuario ya esta registrado', icon: 'error', showCancelButton: true, cancelButtonText: 'Ok', showConfirmButton: false, allowOutsideClick: false, allowEscapeKey: false })
        else {
            const user = { nombre: form.name, email: form.email, password: form.password1, imagen: '' }
            const response = await registerUser(user)
            // const response = 207
            if (response.status == 201)
                // if (response == 201)
                setSwalProps({ show: true, title: 'Informacion', text: 'Usuario Registrado correctamente', icon: 'success', showConfirmButton: true, allowOutsideClick: false, allowEscapeKey: false })
            else
                setSwalProps({ show: true, title: 'Informacion', text: 'Usuario no fue registrado', icon: 'error', showCancelButton: true, cancelButtonText: 'Ok', showConfirmButton: false, allowOutsideClick: false, allowEscapeKey: false })
        }
    };

    const handleClick = () => {
        navigate('/mainpage')
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const formErrors = validateForm()
        if (Object.keys(formErrors).length > 0) { setError(formErrors) }
        else {
            regUser()
        }
    }

    return (
        <Container className="access text-white">
            <h2>Registro de Usuario</h2>
            <Form className="mt-3">
                <Form.Group className="mb-3" >
                    <Form.Label>Nombre Completo:</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Nombre y Apellido"
                        value={form.name}
                        name='name'
                        onChange={(e) => setField('name', e.target.value)}
                        isInvalid={!!error.name}
                    />
                    <Form.Control.Feedback type="invalid">
                        {error.name}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Correo Electronico:</Form.Label>
                    <Form.Control
                        type="email"
                        placeholder="Ingresar Email"
                        value={form.email}
                        name='email'
                        onChange={(e) => setField('email', e.target.value)}
                        isInvalid={!!error.email}
                    />
                    <Form.Control.Feedback type="invalid">
                        {error.email}
                    </Form.Control.Feedback>
                    <Form.Text className="text-light">
                        Nunca Compartiremos este correo con otras personas.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Contraseña:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Contraseña"
                        value={form.password1}
                        name='password1'
                        onChange={(e) => setField('password1', e.target.value)}
                        isInvalid={!!error.password1} />
                    <Form.Control.Feedback type="invalid">
                        {error.password1}
                    </Form.Control.Feedback>
                </Form.Group>

                <Form.Group className="mb-3" >
                    <Form.Label>Confirma tu contraseña:</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Confirmar contraseña"
                        value={form.password2}
                        name='password2'
                        onChange={(e) => setField('password2', e.target.value)}
                        isInvalid={!!error.password2} />
                    <Form.Control.Feedback type="invalid">
                        {error.password2}
                    </Form.Control.Feedback>
                </Form.Group>

                <div className='buttons'>
                    <Button variant="outline-light"
                        type="submit"
                        onClick={handleSubmit} >Registrarse</Button>
                </div>
            </Form>
            <SweetAlert2 {...swalProps}
                onConfirm={handleClick}
            />
        </Container>
    );
};

export default Register;