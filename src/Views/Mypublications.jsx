import { Container, Row, Col, Card } from "react-bootstrap";
import CardProduct from '../Components/CardProduct'
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

const Mypublications = () => {
    const [arrayPublicaciones, setArrayPublicaciones] = useState([]);

    useEffect(() => {
        setArrayPublicaciones(listPublicaciones);
    }, []);

    return (
        <Container>
            <Row className="p-2">
                <Card >
                    <Card.Header> <h4> <b>Mis Publicaciones </b></h4></Card.Header>
                    <Row className='mt-2'>
                        {arrayPublicaciones.length > 0
                            ? arrayPublicaciones.map((item) => (
                                <Col key={item.id} className='ms-2'>
                                    <CardProduct item={item} accion="Modificar"/>
                                </Col>
                            ))
                            : <div>No hay datos</div>}
                    </Row>

                </Card>
            </Row>
        </Container>
    );
};

export default Mypublications;