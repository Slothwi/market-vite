import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ProductContext } from '../context/ProductContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { PlusCircle, MinusCircle, CircleDollarSign, ShoppingBasket } from "lucide-react";

const ShoppingCart = () => {
    const { listShoppingCart, addProductShopping, removeProductShopping, calculateAmount } = useContext(ProductContext)

    const navigate = useNavigate()
    const notify = () => {
        toast.success('Orden pagada!', { position: toast.POSITION.TOP_CENTER })
    }

    return (
        <Container>
            <Row >
                <Col lg={6} md={6} sm={12}>
                    <h3>Carrito de Compras</h3>
                </Col>
            </Row>

            <Card >
                <Card.Body>
                    <Card.Title>
                        <Row >
                            <Col lg={6} md={7}><span className='text-capitalize'> Producto  </span>
                            </Col>
                            <Col lg={2} md={1} className='text-center'> Cantidad</Col>
                            <Col lg={2} md={2} className='text-center'>Precio  </Col>
                            <Col lg={2} md={2} className='text-center'> Accion
                            </Col>
                        </Row>
                    </Card.Title>

                    {listShoppingCart.length > 0
                        ?
                        listShoppingCart.map((prod) => (

                            <Row key={prod.id} className='p-2 border'>
                                <Col lg={6} md={6}><span className='text-capitalize'>  {prod.name}  </span>
                                </Col>
                                <Col lg={2} md={2} className='text-center'> <b> {prod.cantidad} </b>
                                </Col>
                                <Col lg={2} md={2} className='text-success text-center'><b> $ {(prod.price * prod.cantidad).toLocaleString()} </b>
                                </Col>
                                <Col lg={2} md={2} className='text-center' >
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip> Remover </Tooltip>} >
                                        <Button variant='outline-primary' size='sm' onClick={() => removeProductShopping(prod)}><MinusCircle /> </Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip> Añadir </Tooltip>} >
                                        <Button className='ms-2' variant='outline-primary' size='sm' onClick={() => addProductShopping(prod)}> <PlusCircle /> </Button>
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                        ))
                        : <h5 className='text-danger p-4 text-center'> No hay pedidos</h5>}

                    {
                        listShoppingCart.length > 0
                            ? <div>
                                <Row className='mt-3 p-2 '>
                                    <Col lg={7} md={7} >
                                        <Button className='p-1' variant='outline-primary' onClick={notify}> <CircleDollarSign /> Ir a Pagar </Button>
                                        <Button className='p-1 ms-2' variant='outline-primary' onClick={() => navigate('/mainpage/home')}><ShoppingBasket />Market</Button>
                                        <ToastContainer autoClose={1000} />
                                    </Col>
                                    <Col lg={5} md={5} className=''>
                                        <h3><b> Total: $ {calculateAmount()} </b> </h3>
                                    </Col>
                                </Row>
                            </div>
                            : <Button className='p-1 ms-2' variant='outline-primary' onClick={() => navigate('/mainpage/home')}>Volver</Button>
                    }
                </Card.Body>
            </Card>
        </Container>
    );
};

export default ShoppingCart;