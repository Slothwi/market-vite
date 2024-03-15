import { Container, Row, Col, Form, InputGroup, FloatingLabel } from "react-bootstrap";
import { useEffect, useState } from 'react';
import CardProductHome from '../components/CardProductHome'
import { Search } from 'lucide-react';
import { getProducts } from "../services/ProductServices";
import Carrousel from "../components/Carrousel";
import PaginationPro from "../components/PaginationPro";
import Loading from "../components/Loading";
import ScreenEmpty from "../components/ScreenEmpty";
import { addProdFavs } from '../services/ProductServices';

const FIRST_PAGE = 1
const INITIAL_TOTAL_PAGE = 0

const Home = () => {

    const [arrayProductos, setArrayProductos] = useState([]);
    const [name, setName] = useState("");

    const [show, setShow] = useState(true);
    const [currentPage, setCurrentPage] = useState(FIRST_PAGE)
    const [totalPage, setTotalPage] = useState(INITIAL_TOTAL_PAGE);
    const [orderByParam, setOrderByParam] = useState('nombre');
    const [isLoading, setisLoading] = useState(false)

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

    const addProdFav = async (id) => {
        const token = window.sessionStorage.getItem('token')
        if (token) {
    
          const response = await addProdFavs(token, id)
          if (response?.status == 201) {
            console.log('favorito agregado')
          }
          else {
            console.log('favorito no agregado')
          }
        }
        else { console.log('Error GetProdFavs token invalido') }
      }


    const getProd = async () => {
        const limitsParam = 4
        const query = { order_by: orderByParam, page: currentPage, limits: limitsParam }
        const data = await getProducts(query)
        setArrayProductos(data.results)
        setTotalPage (Math.ceil(data.total_general / limitsParam) )
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

    const resetOnChange =  (value) => {
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
                <Col lg={3}></Col>
                <Col lg={4} md={4} sm={4}>
                    <PaginationPro getNextPageProd={getNextPageProd} getPreviousPageProd={getPreviousPageProd} currentPage={currentPage} />
                </Col>

            </Row>

            {/* despliega los productos */}
            <Row className="p-3 ">

                {isLoading ?
                    <Loading />
                    :
                    Array.isArray(arrayProductos) && arrayProductos.length > 0
                        ? arrayProductos.map((item, index) => (
                            <Col key={index} className='ms-2 d-flex justify-content-center'>
                                <CardProductHome item={item} addProdFav={addProdFav}  />
                            </Col>
                        ))
                        : <ScreenEmpty imageSrc={newSearch} textTitle={textTitle} textMsg={textMsg} />
                }

            </Row>
        </Container>
    );
};
export default Home