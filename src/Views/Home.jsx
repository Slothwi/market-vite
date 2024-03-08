import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct'
import { Search } from 'lucide-react';
import { getProducts } from "../services/ProductServices";
import Carrousel from "../components/Carrousel";


const Home = () => {
    const [arrayProductos, setArrayProductos] = useState([]);
    const [name, setName] = useState("");

    // Al ingresar patron de busqueda va a consultar
    const buscarProductos = (e) => {
        setName(e.target.value)
        if (name === '') getProd()
        else {
            const listaFiltrada = arrayProductos.filter(obj => obj.nombre.toLowerCase().includes(name))
            setArrayProductos(listaFiltrada)
        }
    }

    const getProd = async () => {
        const data = await getProducts()
        setArrayProductos(data.results)
    };

    useEffect(() => {
        getProd()
    }, []);

    return (
        <Container>
            {/* buscador de productos */}
            <Row className="" >
                <Col lg={7} md={6} sm={12} >
                    <InputGroup>
                        <InputGroup.Text> <Search /></InputGroup.Text>
                        <Form.Control
                            type="text"
                            value={name}
                            size="sm"
                            aria-describedby="passwordHelpBlock"
                            onChange={buscarProductos}
                            onBlur={buscarProductos}
                            placeholder="Busqueda de producto"
                        />
                    </InputGroup>
                </Col>
            </Row>
            {/* carrusel*/}
            <Row>
                <Carrousel />
            </Row>
            {/* despliega los productos */}
            <Row className="p-2">
                <Row className='mt-3 mb-3'>
                    {arrayProductos.length > 0
                        ? arrayProductos.map((item, index) => (
                            <Col key={index} className='ms-2'>
                                <CardProduct item={item} accion="Agregar" />
                            </Col>
                        ))
                        : <div>No hay datos</div>}
                </Row>

            </Row>
        </Container>
    );
};
export default Home