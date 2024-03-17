import React, { useState, useEffect } from 'react';
import { Container, Accordion } from 'react-bootstrap';
import { getOrders } from '../services/OrderServices';

const Historial = () => {
    const [historial, setHistorial] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getOrders();
                const orders = response.orders; // Acceder a la propiedad "orders" en la respuesta
                setHistorial(orders);
                setLoading(false);
            } catch (error) {
                console.error('Error al obtener los pedidos del usuario:', error);
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    console.log('Historial:', historial);

    return (
        <Container className="cart">
            {loading ? (
                <div>Cargando...</div>
            ) : (
                <Accordion defaultActiveKey="0">
                    {historial && historial.length > 0 ? (
                        historial.map((pedido, index) => (
                            <Accordion.Item key={index} eventKey={index.toString()}>
                                <Accordion.Header>
                                    {`Pedido #${index + 1} - Creado el ${new Date(pedido.created_at).toLocaleString()}`}
                                </Accordion.Header>
                                <Accordion.Body>
                                    <div>Número de Pedido: {pedido.numero_pedido}</div>
                                    <div>Estado: {pedido.estado}</div>
                                </Accordion.Body>
                            </Accordion.Item>
                        ))
                    ) : (
                        <div>No se encontraron pedidos en el historial.</div>
                    )}
                </Accordion>
            )}
        </Container>
    );
};

export default Historial;
