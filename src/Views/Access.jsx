import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Access = () => {


    return (
    <div className="access">
        <img className="access-img" src="https://t4.ftcdn.net/jpg/04/46/40/87/360_F_446408796_sO3c3ZIuWMgvXNbfXM4Hyqt7pLtGzKQo.jpg" alt="pikachu_img" />
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
            <Button variant="primary" type="submit" >Acceder</Button>
            <Button variant="primary" type="submit" >Registrarse</Button>
        </Form>
    </div>
    );
};

export default Access;