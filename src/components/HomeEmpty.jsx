
import { Row, Image, Col } from "react-bootstrap";
import newSearch from "../../public/newSearch.jpg";

const HomeEmpty = () => {

    return (
        <Row className="mt-5  ">
            <Col xs={12} lg={12} md={12}>
                <Image className="imgsize mx-auto d-block" src={newSearch} />
                <h4 className='text-center mt-3'>No encontramos coincidencia</h4>
                <p className='text-center mt-1' > ¡Intentalo nuevamente! 🙏</p>
            </Col>
        </Row>
    )
}

export default HomeEmpty;