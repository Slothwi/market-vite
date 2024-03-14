import { Container } from "react-bootstrap";
import Accordion from 'react-bootstrap/Accordion';


const Historial = () => {

    return (
    <Container className="cart">
        <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Producto #1</Accordion.Header>
                    <Accordion.Body>
                        Fecha del Producto Comprado 
                    </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Producto #2</Accordion.Header>
                <Accordion.Body>
                    Fecha del producto comprado
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </Container>
    );
};

export default Historial;