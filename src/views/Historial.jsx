import React, { useState, useEffect } from 'react';
import { Container, Accordion } from 'react-bootstrap';

const Historial = () => {
    const [historial, setHistorial] = useState([]);

    useEffect(() => {
        fetch('URL_DEL_BACKEND/historial_de_compras')
            .then(response => response.json())
            .then(data => setHistorial(data))
            .catch(error => console.error('Error al obtener historial de compras:', error));
    }, []);

    return (
        <Container className="cart">
            <Accordion defaultActiveKey="0">
                {historial.map((compra, index) => (
                <Accordion.Item key={index} eventKey={index.toString()}>
                <Accordion.Header>{`Producto #${index + 1}`}</Accordion.Header>
                    <Accordion.Body>
                        Fecha del Producto Comprado: {compra.fecha}
                        
                    </Accordion.Body>
                </Accordion.Item>
            ))}
        </Accordion>
    </Container>
  );
};

export default Historial;