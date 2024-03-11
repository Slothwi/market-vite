import { Container, Row, Col, Form, InputGroup } from "react-bootstrap";
import { useEffect, useState } from 'react';
import CardProduct from '../components/CardProduct'
import { Search } from 'lucide-react';
import { getProducts } from "../services/ProductServices";
import Carrousel from "../components/Carrousel";
import HomeEmpty from "../components/HomeEmpty";


const Home = () => {

    const [arrayProductos, setArrayProductos] = useState([]);
    const [name, setName] = useState("");

    const [show, setShow] = useState(true);

    // Al ingresar patron de busqueda va a consultar
    const buscarProductos = (e) => {
        setName(e.target.value)
        setShow(false)
        if (name === '') getProd()
        else {
            const listaFiltrada = arrayProductos.filter(obj => obj.nombre.toLowerCase().includes(name))
            setArrayProductos(listaFiltrada)
            console.log(arrayProductos)
        }
    }

    const getProd = async () => {
        const orderByParam = "nombre"
        const pageParam = 1
        const limitsParam = 6
        const query = { order_by: orderByParam, page: pageParam, limits:limitsParam }
        const data = await getProducts( query)
        setArrayProductos(data.results)
    };

    useEffect(() => {
        setShow(true)
        getProd()
    }, []);

    return (
        <Container>
            {/* buscador de productos */}
            <Row >
                <Col lg={3}></Col>
                <Col lg={6} md={6} sm={12}  >
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
            {show && <Row>
                <Carrousel />
            </Row>}
            {/* despliega los productos */}
            <Row className="p-3 ">
                    {arrayProductos.length > 0
                        ? arrayProductos.map((item, index) => (
                            <Col key={index} className='ms-2 d-flex justify-content-center'>
                                <CardProduct item={item} accion="Agregar" />
                            </Col>
                        ))
                        : <HomeEmpty />}
            </Row>
        </Container>
    );
};
export default Home