import { Container, Row, Col, Form, InputGroup, FloatingLabel } from "react-bootstrap";
import { useContext, useEffect, useState } from 'react';
import CardProductHome from '../components/CardProductHome'
import { Search } from 'lucide-react';
import { getProducts } from "../services/ProductServices";
import Carrousel from "../components/Carrousel";
import PaginationPro from "../components/PaginationPro";
import Loading from "../components/Loading";
import ScreenEmpty from "../components/ScreenEmpty";
import { addProdFavs } from '../services/ProductServices';
import SweetAlert2 from 'react-sweetalert2'
import { orderShopping } from "../services/OrderServices";
import { ProductContext } from "../context/ProductContext";

const FIRST_PAGE = 1
const INITIAL_TOTAL_PAGE = 0

const Home = () => {
    const { getProdShop } = useContext(ProductContext)

    const [arrayProductos, setArrayProductos] = useState([]);
    const [name, setName] = useState("");

    const [show, setShow] = useState(true);
    const [currentPage, setCurrentPage] = useState(FIRST_PAGE)
    const [totalPage, setTotalPage] = useState(INITIAL_TOTAL_PAGE);
    const [orderByParam, setOrderByParam] = useState('nombre');
    const [isLoading, setisLoading] = useState(false)

    const [swalProps, setSwalProps] = useState({});

    const [textTitle,] = useState('No encontramos coincidencia')
    const [textMsg,] = useState('¡Intentalo nuevamente! 🙏')
    const [newSearch,] = useState('/newSearch.jpg')

    // Al ingresar patron de busqueda va a consultar
    const buscarProductos = (e) => {
        setName(e.target.value)
        setShow(false)
        if (name === '') getProd()
        else {
            const listaFiltrada = arrayProductos.filter(obj => obj.nombre.toLowerCase().includes(name))
            setCurrentPage(FIRST_PAGE)
            setArrayProductos(listaFiltrada)
            setTotalPage(listaFiltrada.length)
        }
    }

    const addProdShopping = async (item) => {
        setSwalProps({})
        const response = await orderShopping(item)
        if (response) {
            setSwalProps({ show: true, title: 'Informacion', text: 'Producto incorporado al carrito', icon: 'success' })
            await getProdShop()
             }
        else {
            setSwalProps({ show: true, title: 'Informacion', text: 'Producto no incorporado al carrito', icon: 'error' })
        }
       
    }


    const addProdFav = async (id) => {
        setSwalProps({})
        const token = window.sessionStorage.getItem('token')
        if (token) {
            const response = await addProdFavs(token, id)
            if (response) {
                setSwalProps({ show: true, title: 'Informacion', text: 'Producto incorporado a Favoritos', icon: 'success' })
            }
            else {
                setSwalProps({ show: true, title: 'Informacion', text: 'Producto no incorporado a Favoritos', icon: 'error' })
            }
        }
        else { console.log('Error GetProdFavs token invalido') }
    }


    const getProd = async () => {
        const limitsParam = 4
        const query = { order_by: orderByParam, page: currentPage, limits: limitsParam }
        const data = await getProducts(query)
        setArrayProductos(data.results)
        setTotalPage(Math.ceil(data.total_general / limitsParam))
    };

    const getNextPageProd = async () => {
        setCurrentPage(value => {
            if (value < totalPage) {
                return value + 1
            }
            return value
        })
    };

    const getPreviousPageProd = async () => {
        setCurrentPage(value => {
            if (value > 1) {
                return value - 1
            }
            return value
        })
    };

    const resetOnChange = (value) => {
        setCurrentPage(FIRST_PAGE)
        setOrderByParam(value)
    };


    useEffect(() => {
        const fetchData = async () => {
            setisLoading(true)
            await getProd();
            setisLoading(false)
        }
        fetchData()        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, orderByParam]);

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

            {/* Paginacion productos*/}

            <Row className="mt-5" >
                <Col lg={1}></Col>
                <Col lg={4} md={4} sm={4}  >
                    <FloatingLabel controlId="floatingSelect" label="Ordenar por:" size="sm" >
                        <Form.Select
                            aria-label="Floating label"
                            onChange={e => { resetOnChange(e.target.value) }}>
                            <option value="nombre">Nombre</option>
                            <option value="precio_lista">Precio</option>
                            <option value="marca_producto">Marca</option>
                        </Form.Select>
                    </FloatingLabel>
                </Col>
                <Col lg={4}></Col>
            </Row>

            {/* despliega los productos */}
            <Row className="p-3 ">

                {isLoading ?
                    <Loading />
                    :
                    Array.isArray(arrayProductos) && arrayProductos.length > 0
                        ? arrayProductos.map((item, index) => (
                            <Col key={index} className='ms-2 d-flex justify-content-center'>
                                <CardProductHome item={item} addProdFav={addProdFav} addProdShopping={addProdShopping} />
                            </Col>
                        ))
                        : <ScreenEmpty imageSrc={newSearch} textTitle={textTitle} textMsg={textMsg} />
                }
                <SweetAlert2 {...swalProps} />
            </Row>
            <Row className="mt-3">
                <Col className="d-flex justify-content-center">
                    <PaginationPro getNextPageProd={getNextPageProd} getPreviousPageProd={getPreviousPageProd} currentPage={currentPage} />
                </Col>
            </Row>
        </Container>
    );
};
export default Home