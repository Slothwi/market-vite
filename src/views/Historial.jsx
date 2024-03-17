import React, { useState, useEffect } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { getPostsByUser } from '../services/ProductServices';

const Historial = () => {
    const [loading, setLoading] = useState(true);
    const [historial, setHistorial] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getPostsByUser();
                setHistorial(data.myPosts); // Accedemos a myPosts
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los datos:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log("Historial:", historial); // Verificar los datos recibidos

    return (
        <Container className="cart">
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <Accordion defaultActiveKey="0">
                    {historial && historial.length > 0 ? (
                        historial.map((product, index) => (
                            <Accordion.Item key={index} eventKey={index.toString()}>
                                <Accordion.Header>
                                    {`Producto #${index + 1} - Creado el ${product.created_at}`}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>Nombre: {product.nombre}</div>
                                    <div>Descripción: {product.descripcion}</div>
                                    <div>Marca: {product.marca_producto}</div>
                                    <div>Precio: {product.precio_lista}</div>
                                    {/* Agrega más propiedades según sea necesario */}
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                    ) : (
                        <div>No se encontraron productos en el historial.</div>
                    )}
                </Accordion>
            )}
        </Container>
    );
};

export default Historial;




