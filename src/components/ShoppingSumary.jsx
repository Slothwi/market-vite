
import { Col, Button, Card, Row, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { CircleDollarSign, ShoppingBasket } from "lucide-react";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const ShoppingSumary = () => {
    const { quantityProduct, calculateAmount } = useContext(ProductContext)

    const navigate = useNavigate()
    const notify = () => {
        toast.success('Orden pagada!', { position: toast.POSITION.TOP_CENTER })
    }

    return (
        // Resumen
        <Col lg={4}>
            <Container>
                <h5>Resumen de la compra </h5>
                <Row>
                    <Col>
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
                                <h5>$ {calculateAmount().toLocaleString()} </h5>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
            <Container>
                <Row>
                    <Col className="p-4 text-center">
                        <Button className='p-1' variant='outline-primary' onClick={notify}> <CircleDollarSign /> Ir a Pagar </Button>
                        <Button className='p-1 ms-2' variant='outline-primary' onClick={() => navigate('/mainpage/home')}><ShoppingBasket />Market</Button>
                        <ToastContainer autoClose={1000} />
                    </Col>
                </Row>
            </Container>
        </Col >
    )
}

export default ShoppingSumary;