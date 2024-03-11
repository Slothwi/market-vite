
import { Row, Col,Image } from "react-bootstrap";
import shopping from "../assets/Shopping.png";
const ShoppingListEmpty = () => {
  

    return (
        <>
            <Row>
                <Col lg={9} className='d-flex flex-column'>
                    <Image className="mx-auto imgsize" src={shopping} />
                    <h4 className='text-center'>Tu Carrito esta vacio</h4>
                    <p className='text-center'> ¡Empieza un carrito de compras y suma productos! 🙏</p>
                </Col>
            </Row>
        </>
    )
}

export default ShoppingListEmpty;