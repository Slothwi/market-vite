import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Registro = () => {


    return (
    <div className="access">
        <h1>Aqui puedes Registrarte</h1>
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
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirma tu contrasena</Form.Label>
                <Form.Control type="password" placeholder="Contrasena" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Confirmo que son mis datos" />
            </Form.Group>
            <Button variant="primary" type="submit" >Registrarse</Button>
        </Form>
    </div>
    );
};

export default Registro;