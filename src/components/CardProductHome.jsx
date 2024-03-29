import { Card, Button, Row, Col, Badge } from 'react-bootstrap'
import '../assets/css/CardProduct.css';
import IconHeart from './IconHeart';
 
const CardProductHome = ({ item, addProdFav, addProdShopping }) => {

  return (
    <div>
      <Card style={{ width: '17rem' }} className='mt-4' key={item.id}>
        <div className='d-flex mt-1 pe-1 justify-content-end'>
          {item.precio > 7000 ?
              <Badge className='mr-1' bg="secondary">Envio gratis</Badge>
              :
              <Badge className='mr-1' bg="primary">LLega mañana</Badge>
          }
        </div>
        <div className='d-flex'>
          <Card.Img className='mt-2 img_card' variant='top' src={item.imagen} />
        </div>

        <Card.Body >
          <Card.Title className='m-0 text-capitalize text-center d-flex justify-content-between'>
            <b>{item.nombre} </b>
            <div key={item.id_producto} onClick={() => addProdFav(item.id_producto)}>
              <IconHeart filled={false} ></IconHeart>
            </div>

          </Card.Title>

          <div className='m-0'><small>{item.marca}</small></div>
          <hr />
          <p><b>{item.descripcion} </b></p>
          <Row>
            <Col >SKU: {item.SKU}</Col>
          </Row>
          <Row>
            <Col >Stock: {item.stock}</Col>
          </Row>
          <Row>
            <Col ><strong> ${item.precio.toLocaleString()}</strong></Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-between align-items-center mt-1">
              <span><small>
                {!item.nuevousado ? <p><mark>Nuevo</mark></p> : <p><mark>Usado</mark></p>}
              </small></span>
              <Button className='p-1 m-2 ' variant='outline-success' size='md' onClick={() => addProdShopping(item)}> Añadir Carrito </Button>
            </Col>
          </Row>         
        </Card.Body>
      </Card>

    </div>
  )
}

export default CardProductHome
