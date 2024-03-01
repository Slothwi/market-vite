import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import "../assets/css/Config.css"

function Config() {
    return (
    <Form className='access text-light'>
        <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Nuevo Email:</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Nueva Contraseña:</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
        </Row>

            <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Nuevo Nombre:</Form.Label>
                <Form.Control placeholder="Tu Nuevo Nombre Aquí" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formGridLastName">
                <Form.Label>Nuevo Apellido:</Form.Label>
                <Form.Control placeholder="Aquí Tu Nuevo Apellido" />
            </Form.Group>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridDay">
                    <Form.Label>Dia:</Form.Label>
                    <Form.Control />
                </Form.Group>

        <Form.Group as={Col} controlId="formGridMonth">
        <Form.Label>Mes:</Form.Label>
                    <Form.Control />
        </Form.Group>

            <Form.Group as={Col} controlId="formGridYear">
                <Form.Label>Año:</Form.Label>
                <Form.Control />
            </Form.Group>
        </Row>

        <Form.Group className="mb-3" id="formGridCheckbox">
            <Form.Check type="checkbox" label="¿Confirmaste tus Datos?" />
        </Form.Group>

        <div className='buttons'>
        <Button variant="outline-light" type="submit">
            Actualizar Datos
        </Button>
        <Button variant="outline-danger" type="danger">
            Cancelar
        </Button>
        </div>
    </Form>
    );
}

export default Config;