import { Container, Row, Col, Card } from "react-bootstrap";
import CardProducto from '../Components/CardProducto'
import { useEffect, useState } from 'react';

const listPublicaciones = [
    {
        id: "1",
        nombre: "Neumatico",
        descripcion: "Medida 295/80 R22.5",
        marca: "Nexen",
        sku: "302247",
        precio: 25000,
        stock: 10,
        nuevousado: "usado",
        img: "https://www.ceadechile.cl/images/img/blog/neumaticos-elementos-seguridad.jpg"
    },
    {
        id: "2",
        nombre: "Alternador",
        descripcion: "Alternador 3 pines (inyeccion delphi)",
        marca: "Unipoint",
        sku: "873766",
        precio: 80000,
        stock: 3,
        nuevousado: "usado",
        img: "https://www.autofacil.es/wp-content/uploads/2021/05/alternador2.jpg"
    }
]

const MisPublicaciones = () => {
    const [arrayPublicaciones, setArrayPublicaciones] = useState([]);

    useEffect(() => {
        setArrayPublicaciones(listPublicaciones);
    }, []);

    return (
        <Container>
            <Row className="d-flex align-items-center">
                <Col lg={3} md={3} sm={12}>
                    <h3>Mis Publicaciones</h3>
                </Col>
            </Row>
            <Row className="p-2">
                <Card >
                    <Card.Header> <b>Productos </b></Card.Header>
                    <Row className='mt-2'>
                        {arrayPublicaciones.length > 0
                            ? arrayPublicaciones.map((item) => (
                                <Col key={item.id} className='ms-2'>
                                    <CardProducto item={item} accion="Modificar"/>
                                </Col>
                            ))
                            : <div>No hay datos</div>}
                    </Row>

                </Card>
            </Row>
        </Container>
    );
};

export default MisPublicaciones;