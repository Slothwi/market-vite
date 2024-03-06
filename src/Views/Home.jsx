import { Container, Row, Col, Form, Card, InputGroup } from "react-bootstrap";
import { useEffect, useState } from 'react';
import CardProduct from '../Components/CardProduct'
import { Search } from 'lucide-react';
import { getProducts } from "../Services/ProductServices";
import Carrousel from "../Components/Carrousel";

const arrayFiltrado = [
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
    },
    {
        id: "3",
        nombre: "Tornillo",
        descripcion: "Tornillo 3 pines (inyeccion delphi)",
        marca: "Unipoint",
        sku: "34343",
        precio: 25600,
        stock: 1,
        nuevousado: "nuevo",
        img: "https://www.autofacil.es/wp-content/uploads/2021/05/alternador2.jpg"
    }
]

const Home = () => {
    const [arrayProductos, setArrayProductos] = useState([]);
    const [name, setName] = useState("");

    // Al ingresar patron de busqueda va a consultar
    const buscarProductos = (e) => {
        setName(e.target.value)

        const listaFiltrada = arrayFiltrado.filter(obj => obj.nombre.toLowerCase().includes(name))
        setArrayProductos(listaFiltrada)
    }

    const getProductsService = async () => {
        return await getProducts()
    }

    useEffect(() => {
        setArrayProductos(arrayFiltrado);
        getProductsService()
    }, []);

    return (
        <Container>
            <Row className="p-2" >
                <Col lg={7} md={6} sm={12} >
                    <InputGroup>
                        <InputGroup.Text> <Search /></InputGroup.Text>
                        <Form.Control
                            type="text"
                            value={name}
                            size="sm"
                            aria-describedby="passwordHelpBlock"
                            onChange={buscarProductos}
                            placeholder="Busqueda de producto"
                        />
                    </InputGroup>
                </Col>
            </Row>
            <Row>
            <Carrousel />
            </Row>
            <Row className="p-2">
                <Card >
                    <Card.Header> <b>Productos </b></Card.Header>
                    <Row className='mt-2'>
                        {arrayProductos.length > 0
                            ? arrayProductos.map((item) => (
                                <Col key={item.id} className='ms-2'>
                                    <CardProduct item={item} accion="Agregar" />
                                </Col>
                            ))
                            : <div>No hay datos</div>}
                    </Row>

                </Card>
            </Row>
        </Container>
    );
};
export default Home