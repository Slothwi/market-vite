import { Row, Col, Card, Button, Badge, OverlayTrigger, Tooltip } from "react-bootstrap";
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer, toast } from "react-toastify";
import { CircleDollarSign, ShoppingBasket } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { addProdShopCart, remDetailShopCart, remProdShopCart } from "../services/OrderServices";
import { useContext, useEffect, useState } from 'react';
import Loading from "../components/Loading";
import ScreenEmpty from "../components/ScreenEmpty";
import { PlusCircle, MinusCircle } from "lucide-react";
import { ProductContext } from "../context/ProductContext";

const ShoppingCart = () => {
    const navigate = useNavigate()

    const { quantityProduct, getProdShop, arrayShoppingCart, setArrayShoppingCart, calculateAmount } = useContext(ProductContext)

    const [isLoading, setisLoading] = useState(false)

    const [textTitle,] = useState('Tu Carrito esta vacio')
    const [textMsg,] = useState('¡Empieza un carrito de compras y suma productos! 🙏')
    const [newSearch,] = useState('/shopping.png')

    const notify = (texto) => {
        toast.success(texto, { position: toast.POSITION.TOP_CENTER })
        window.sessionStorage.removeItem('nroPedido')
        setArrayShoppingCart([])
        navigate('/mainpage')
    }

    const addProdShopping = async (id_detalle) => {
        const detailAction = { quantity: 1, action: 'add' }
        try {
            await addProdShopCart(id_detalle, detailAction)
            await getProdShop()
        }
        catch (error) {
            console.error('Error al sumar', error);
            throw error;
        }
    }

    const removeProdShopping = async (id_detalle, cantidad) => {
        if (cantidad > 1) {
            const detailAction = { quantity: 1, action: 'subt' }
            try {
                await remProdShopCart(id_detalle, detailAction)
            }
            catch (error) {
                console.error('Error al restar', error);
                throw error;
            }
        }
        else {
            try {
                await remDetailShopCart(id_detalle)
            }
            catch (error) {
                console.error('Error al restar', error);
                throw error;
            }
        }
        await getProdShop()
    };

    useEffect(() => {
        const fetchData = async () => {
            setisLoading(true)
            await getProdShop()
            setisLoading(false)
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {isLoading ?
                <Loading />
                :
                Array.isArray(arrayShoppingCart) && arrayShoppingCart.length > 0
                    ?
                    <div>
                        <Row className='d-flex flex-row'>
                            {/* Despliega el detalle de productos del carrito */}
                            <Col lg={8}>
                                {/* productos del carrito */}
                                <div className='d-flex flex-row'><h5>Carro  </h5> <p>&nbsp;({quantityProduct()} productos) </p>
                                </div>

                                {arrayShoppingCart.map((prod, index) => (
                                    <Card key={index}>
                                        <Row className='p-2'>
                                            <Col lg={2} md={2}>
                                                <Card.Img className='mt-3' variant='top' src={prod.imagen_producto} style={{ width: '6rem', height: '6em' }} />
                                            </Col>

                                            <Col lg={3} md={3} className='d-flex flex-column justify-content-between'>
                                                <div> <span className='d-flex flex-column text-capitalize'> <b>{prod.nombre_producto} </b>  </span>
                                                    <small>{prod.marca_producto}</small>
                                                </div>
                                                <p> {prod.descripcion_producto}</p>
                                            </Col>

                                            <Col lg={2} md={2} className='text-center'>
                                                <h5 className="text-primary"> <b> $ {(prod.neto * prod.cantidad).toLocaleString()} </b></h5>
                                            </Col>

                                            <Col lg={3} md={3} className='text-center' >
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip> Remover </Tooltip>} >
                                                    <Button variant='outline-primary border-0' onClick={() => removeProdShopping(prod.id_detalle, prod.cantidad)}><MinusCircle /> </Button>
                                                </OverlayTrigger>
                                                <b> {prod.cantidad} </b>
                                                <OverlayTrigger
                                                    placement="top"
                                                    overlay={<Tooltip> Añadir </Tooltip>} >
                                                    <Button className='ms-2' variant='outline-primary border-0' onClick={() => addProdShopping(prod.id_detalle)}> <PlusCircle /> </Button>

                                                </OverlayTrigger>
                                            </Col>

                                            <Col lg={2} md={2} className="d-flex align-items-end justify-content-end">
                                                {prod.precio > 7000 ?
                                                    <span><Badge bg="secondary">Envio gratis</Badge> </span>
                                                    :
                                                    <span><Badge bg="primary">LLega mañana</Badge> </span>
                                                }
                                            </Col>
                                        </Row>
                                    </Card>
                                ))}
                            </Col >

                            {/* Despliega el resumen */}
                            <Col lg={4}>
                                <h5>Resumen de la compra </h5>
                                <Card className="p-3">
                                    <div className="d-flex flex-row justify-content-between">
                                        <div className="d-flex flex-row">
                                            <b>Productos: </b>
                                            <p>&nbsp;({quantityProduct()}) </p>
                                        </div>
                                        <p>$ {calculateAmount().toLocaleString()} </p>
                                    </div >
                                    <div className="d-flex flex-row justify-content-between">
                                        <b>Total: </b>
                                        <h4 className="text-success">$ {calculateAmount().toLocaleString()} </h4>
                                    </div>
                                </Card>
                                <Row>
                                    <Col className="p-4 text-center">
                                        <Button className='p-1' variant='outline-primary' onClick={() => notify('Compra exitosa!')}> <CircleDollarSign /> Ir a Pagar </Button>
                                        <Button className='p-1 ms-2' variant='outline-primary' onClick={() => navigate('/mainpage/home')}><ShoppingBasket />Market</Button>
                                        <ToastContainer autoClose={10000000} />
                                    </Col>
                                </Row>
                            </Col >
                        </Row>
                    </div>
                    : <ScreenEmpty imageSrc={newSearch} textTitle={textTitle} textMsg={textMsg} />
            }
        </>
    );
};

export default ShoppingCart;