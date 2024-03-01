import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "../assets/css/Access.css"

const Registro = () => {


    return (
    <div className="access text-white">
        <h2>Registro de Usuario</h2>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Nombre Completo:</Form.Label>
                <Form.Control type="name" placeholder="Nombre y Apellido" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico:</Form.Label>
                <Form.Control type="email"  placeholder="Ingresar Email" />
                <Form.Text className="text-light">
                    Nunca Compartiremos este correo con otras personas.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contraseña:</Form.Label>
                <Form.Control type="password" placeholder="*********" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirma tu contraseña:</Form.Label>
                <Form.Control type="password" placeholder="*********" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Confirmo que son mis datos" />
            </Form.Group>
            <div className='buttons'><Button variant="outline-light" type="submit" >Registrarse</Button></div>
        </Form>
    </div>
    );
};

export default Registro;