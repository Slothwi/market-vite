import React, { useState } from 'react';
import axios from 'axios';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { Ban, ArrowUpFromLine } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const Publish = () => {
    const [formData, setFormData] = useState({
        name: '',
        brand: '',
        description: '',
        price: '',
        stock: '',
        status: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('https://marketplace-back-end-4sb8.onrender.com/api/v1', formData);
            console.log('Producto publicado exitosamente');
            // Redireccionamiento o acción adicional después de publicar el producto
        } catch (error) {
            console.error('Error al publicar el producto:', error);
        }
    };

    return (
        <>
            <Container className="access">
                <h2 className='text-white'>Publica Tu Producto</h2>
                <Form className='text-white' onSubmit={handleSubmit}>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicName">
                                <Form.Label>Nombre del Producto:</Form.Label>
                                <Form.Control type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Producto" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicBrand">
                                <Form.Label>Marca del Producto:</Form.Label>
                                <Form.Control type="text" name="brand" value={formData.brand} onChange={handleChange} placeholder="Marca" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Descripcion del producto:</Form.Label>
                        <Form.Control as="textarea" rows={3} name="description" value={formData.description} onChange={handleChange} placeholder="Descripcion" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Precio Del Producto:</Form.Label>
                        <Form.Control type="text" name="price" value={formData.price} onChange={handleChange} placeholder="$$$$$" />
                    </Form.Group>
                    <Row>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicStock">
                                <Form.Label>Cantidad:</Form.Label>
                                <Form.Control type="text" name="stock" value={formData.stock} onChange={handleChange} placeholder="Stock" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicBrand">
                                <Form.Label>Estado:</Form.Label>
                                <Form.Select aria-label="Status" name="status" value={formData.status} onChange={handleChange}>
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
                            <Button variant="outline-danger" type="button">
                                <Ban />Cancelar
                            </Button>
                        </NavLink>
                        <Button variant="outline-light" type="submit">
                            <ArrowUpFromLine />Publicar
                        </Button>
                    </div>
                </Form>
            </Container>
        </>
    );
};

export default Publish;

