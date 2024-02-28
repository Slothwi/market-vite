import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../assets/css/Access.css"
import { CircleUser } from 'lucide-react';

const Access = () => {


    return (
        <div className="access">
        <CircleUser  />
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Correo Electronico</Form.Label>
                <Form.Control type="email"  placeholder="Ingresar Email" />
                <Form.Text className="text-muted">
                    Nunca Compartiremos este correo con otras personas.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Contrasena</Form.Label>
                <Form.Control type="password" placeholder="Contrasena" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Confirmo que son mis datos" />
            </Form.Group>
            <div className='buttons'>
            <Button variant="primary" type="submit" >Acceder</Button>
            <Button variant="primary" type="submit" >Registrarse</Button>
            </div>
        </Form>
    </div>
    );
};

export default Access;