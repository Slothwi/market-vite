
import { Row, Col, Image } from "react-bootstrap";
import newSearch from "../assets/NuevaBusqueda.jpg";

const HomeEmpty = () => {

    return (
        <Row>
            <Col lg={12} md={12} sm={12} className='d-flex flex-column'>
                <Image className="mx-auto  imgsize" src={newSearch} />
                <h4 className='text-center mt-3'>No encontramos coincidencia</h4>
                <p className='text-center'> ¡Intentalo nuevamente! 🙏</p>
            </Col>
        </Row>
    )
}

export default HomeEmpty;