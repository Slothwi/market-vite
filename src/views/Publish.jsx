import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carrousel from '../components/Carrousel';
import { Ban,ArrowUpFromLine } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Publish = () => {

    return (
    <>
        <Container className="access">
            <h2 className='text-white'>Publica Tu Producto</h2>
        <Form className='text-white'>
        <Row>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Nombre del Producto:</Form.Label>
                    <Form.Control type="name" placeholder="Producto" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicBrand">
                    <Form.Label>Marca del Producto:</Form.Label>
                    <Form.Control type="brand" placeholder="Marca" />
                </Form.Group>
            </Col>
        </Row>

    <Form.Group className="mb-3" controlId="formBasicDescription">
        <Form.Label>Descripcion del producto:</Form.Label>
        <Form.Control as="textarea" rows={3} type="Description" placeholder="Descripcion" />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicPrice">
        <Form.Label>Precio Del Producto:</Form.Label>
        <Form.Control type="Price" placeholder="$$$$$" />
    </Form.Group>
    <Row>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicStock">
                    <Form.Label>Cantidad:</Form.Label>
                    <Form.Control type="Stock" placeholder="Stock" />
                </Form.Group>
            </Col>
            <Col>
                <Form.Group className="mb-3" controlId="formBasicBrand">
                    <Form.Label>Estado:</Form.Label>
                    <Form.Select aria-label="Status">
                        <option>Elige el estado</option>
                        <option value="1">Nuevo</option>
                        <option value="2">Semi-Nuevo</option>
                        <option value="3">Usado</option>
                    </Form.Select>
                </Form.Group>
            </Col>
        </Row>
    <div className='buttons'>
    <NavLink to="/mainpage/home">
        <Button variant="outline-danger" type="submit">
            <Ban />Cancelar
        </Button>
    </NavLink>
    <Button variant="outline-light" type="submit">
        <ArrowUpFromLine />Publicar
    </Button>
    </div>
    </Form>
    </Container>
    <Container>
        <Carrousel  />
    </Container>
    </>
    );
};

export default Publish;