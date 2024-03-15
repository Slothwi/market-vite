import React, { useState } from 'react';
import { Container, Button, Form, Row, Col } from 'react-bootstrap';
import { Ban, ArrowUpFromLine } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { createProduct } from '../services/ProductServices';
import Carrousel from '../components/Carrousel';

const Publish = () => {
    const [formData, setFormData] = useState({
        nombre: '',
        marca_id: '',
        descripcion: '',
        precio_lista: '',
        stock: '',
        usado: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const accesToken = window.sessionStorage.getItem('token');


            if (!accesToken) {
                console.error('No se ha encontrado un token de acceso en sessionStorage');
                return;
            }


            const newProduct = await createProduct(formData, accesToken);
            console.log('Producto creado:', newProduct);
        } catch (error) {
            console.error('Error al crear el producto:', error);
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
                                <Form.Control type="text" name="nombre" value={formData.nombre} onChange={handleChange} placeholder="Producto" />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group className="mb-3" controlId="formBasicBrand">
                                <Form.Label>Marca del Producto:</Form.Label>
                                <Form.Control type="text" name="marca_id" value={formData.marca_id} onChange={handleChange} placeholder="Marca" />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group className="mb-3" controlId="formBasicDescription">
                        <Form.Label>Descripcion del producto:</Form.Label>
                        <Form.Control as="textarea" rows={3} name="descripcion" value={formData.descripcion} onChange={handleChange} placeholder="Descripcion" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPrice">
                        <Form.Label>Precio Del Producto:</Form.Label>
                        <Form.Control type="text" name="precio_lista" value={formData.precio_lista} onChange={handleChange} placeholder="$$$$$" />
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
                                <Form.Select aria-label="Status" name="usado" value={formData.usado} onChange={handleChange}>
                                    <option>Elige el estado</option>
                                    <option value="1">1</option>
                                    <option value="0">2</option>
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
            <Container><Carrousel /></Container>
        </>
    );
};

export default Publish;



