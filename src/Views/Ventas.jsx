import { Container, Row, Col } from "react-bootstrap";
import CardProducto from '../Components/CardProducto'

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
      img:"https://www.ceadechile.cl/images/img/blog/neumaticos-elementos-seguridad.jpg"
    },
    {
        id:"2",
        nombre: "Alternador",
        descripcion: "Alternador 3 pines (inyeccion delphi)",
        marca: "Unipoint",
        sku: "873766",
        precio: 80000,
        stock: 3,
        nuevousado: "usado", 
        img:"https://www.autofacil.es/wp-content/uploads/2021/05/alternador2.jpg"    
    }
]

const Ventas = () => {
    return (
        <Container>
            <Row className='mt-4 mx-auto'>
                {listPublicaciones.length > 0
                    ? listPublicaciones.map((item) => (
                        <Col key={item.id} className='col-3 mb-3'>
                            <CardProducto item={item} />
                        </Col>
                    ))
                    : <div>No hay datos</div>}
            </Row>
        </Container>
    );
};

export default Ventas;