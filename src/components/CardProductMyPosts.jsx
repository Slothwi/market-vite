import { Card, Row, Col } from 'react-bootstrap'
import '../assets/css/CardProduct.css';

const CardProductMyPosts = ({ item }) => {

  return (
    <div>
      <Card style={{ width: '17rem' }} className='mt-4' key={item.id}>
     
        <div className='d-flex'>
          <Card.Img className='mt-2 img_card' variant='top' src={item.imagen_url} />
        </div>

        <Card.Body >
          <Card.Title className='m-0 text-capitalize text-center d-flex justify-content-between'>
            <b>{item.nombre} </b>
           
          </Card.Title>

          <div className='m-0'><small>{item.marca}</small></div>
          <hr />
          <p><b>{item.descripcion} </b></p>
          <Row>
            <Col >SKU: {item.sku}</Col>
          </Row>
          <Row>
            <Col >Stock: {item.stock}</Col>
          </Row>
          <Row className='mt-4 text-success'>
            <Col ><strong> ${item.precio_lista.toLocaleString()}</strong></Col>
          </Row>
          <Row className='mt-4'>
            <Col className="d-flex justify-content-end align-items-center">
              <span><small>
                {!item.usado ? <p><mark>Nuevo</mark></p> : <p><mark>Usado</mark></p>}
              </small></span>
             
            </Col>
          </Row>
        </Card.Body>
      </Card>

    </div>
  )
}

export default CardProductMyPosts
