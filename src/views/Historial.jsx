import React, { useState, useEffect } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { getOrders } from '../services/ProductServices';

const Historial = () => {
    const [historial, setHistorial] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const orders = await getOrders();
                setHistorial(orders);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los pedidos del usuario:', error);
                setLoading(false);
            }
        };

        fetchData();

    }, []);

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
                                    <div>Numero Pedido: {product.numero_pedido}</div>
                                    <div>Estado: {product.estado}</div>
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





