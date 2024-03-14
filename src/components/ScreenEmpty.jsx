
import { Row, Image, Col } from "react-bootstrap";

const ScreenEmpty = ( {imageSrc, textTitle, textMsg }) => {

    return (
        <Row className="mt-5  ">
            <Col xs={12} lg={12} md={12}>
                <Image className="imgsize mx-auto d-block" src={imageSrc} />
                <h4 className='text-center mt-3'>{textTitle}</h4>
                <p className='text-center mt-1' > {textMsg}</p>
            </Col>
        </Row>
    )
}

export default ScreenEmpty;