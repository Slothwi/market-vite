import { useContext } from "react";
import { Row, Col, Button, OverlayTrigger, Tooltip, Card, Badge } from "react-bootstrap";
import { PlusCircle, MinusCircle } from "lucide-react";
import { ProductContext } from "../context/ProductContext";


const ShoppingList = () => {
    const { listShoppingCart, addProductShopping, removeProductShopping, quantityProduct } = useContext(ProductContext)

    return (
        <>
            {/* productos del carrito */}
            <Col lg={8}>
                <div className='d-flex flex-row'><h5>Carro  </h5> <p>&nbsp;({quantityProduct()} productos) </p>
                </div>
                {listShoppingCart.length > 0
                    &&
                    listShoppingCart.map((prod, index) => (
                        <Card key={index}>
                            <Row className='p-2'>
                                <Col lg={2} md={2}>
                                    <Card.Img className='mt-3' variant='top' src={prod.imagen} style={{ width: '6rem', height: '6em' }} />
                                </Col>
                                <Col lg={3} md={3} className='d-flex flex-column justify-content-between'>
                                    <div> <span className='d-flex flex-column text-capitalize'> <b>{prod.nombre} </b>  </span>
                                        <small>{prod.marca}</small>
                                    </div>
                                    <div> {prod.precio > 10000 ?
                                        <span><Badge bg="secondary">Envio gratis</Badge> </span>
                                        :
                                        <span><Badge bg="primary">LLega mañana</Badge> </span>
                                    }</div>
                                </Col>
                                <Col lg={2} md={2} className='text-center'>
                                    <b> $ {(prod.precio * prod.cantidad).toLocaleString()} </b>
                                </Col>
                                <Col lg={5} md={5} className='text-center' >
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip> Remover </Tooltip>} >
                                        <Button variant='outline-primary' size='sm' onClick={() => removeProductShopping(prod)}><MinusCircle /> </Button>
                                    </OverlayTrigger>
                                    <b> {prod.cantidad} </b>
                                    <OverlayTrigger
                                        placement="top"
                                        overlay={<Tooltip> Añadir </Tooltip>} >
                                        <Button className='ms-2' variant='outline-primary' size='sm' onClick={() => addProductShopping(prod)}> <PlusCircle /> </Button>
                                    </OverlayTrigger>
                                </Col>
                            </Row>
                        </Card>
                    ))
                }
            </Col>
        </>
    )
}
export default ShoppingList;
