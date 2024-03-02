import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Container, Row, Col, Button, Card, OverlayTrigger, Tooltip } from "react-bootstrap";
import { ProductContext } from '../Context/ProductContext'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { CopyPlus, CopyX } from "lucide-react";

const CarritoCompras = () => {
    const { listShoppingCart, addProductShopping, removeProductShopping, calculateAmount } = useContext(ProductContext)

    const navigate = useNavigate()
    const notify = () => {
        toast.success('Orden pagada!', { position: toast.POSITION.TOP_CENTER })
    }

    return (
        <Container>
            <Row className="d-flex align-items-center">
                <Col lg={6} md={6} sm={12}>
                    <h3>Carrito de Compras</h3>
                </Col>
            </Row>

            <Card >
                <Row className="p-2">
                    <Card.Header> <b>Detalle de Productos </b></Card.Header>

                    {listShoppingCart.length > 0
                        ?
                        listShoppingCart.map((prod) => (


                            <Row key={prod.id} className='p-2'>
                                <Col lg={7} md={7}><span className='col-7 text-capitalize'>  {prod.name}  </span>
                                </Col>
                                <Col lg={1} md={1}> <b> {prod.cantidad} </b>
                                </Col>
                                <Col lg={2} md={2} className='text-success text-center'><b> $ {(prod.price * prod.cantidad).toLocaleString()} </b>
                                </Col>
                                <Col lg={2} md={2}>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip> Remover </Tooltip>} >
                                        <Button variant='outline-primary' size='sm' onClick={() => removeProductShopping(prod)}><CopyX /> </Button>
                                    </OverlayTrigger>

                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip> Añadir </Tooltip>} >
                                        <Button className='ms-2' variant='outline-primary' size='sm' onClick={() => addProductShopping(prod)}> <CopyPlus /> </Button>
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                        ))
                        : <h5 className='text-center'> No hay pedidos</h5>}

                    {
                        listShoppingCart.length > 0
                            ? <div>
                                <Row className='mt-3 p-2 '>
                                    <Col lg={9} md={6} className='text-end'>
                                        <h3><b> Total: $ {calculateAmount()} </b> </h3>
                                    </Col>
                                    <Col lg={3} md={6}  className='text-center'>
                                        <Button className='p-1' variant='outline-primary' onClick={notify}>Ir a Pagar </Button>
                                        <Button className='p-1 ms-2' variant='outline-primary' onClick={() => navigate('/Home')}>Market</Button>
                                        <ToastContainer autoClose={1000} />
                                    </Col>
                                </Row>

                            </div>
                            : <Button className='p-1 ms-2' variant='outline-primary' onClick={() => navigate('/Home')}>Volver</Button>
                    }

                </Row>
            </Card>
        </Container>
    );
};

export default CarritoCompras;