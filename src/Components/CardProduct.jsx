import { Card, Button, Row, Col, Badge } from 'react-bootstrap'
import { Save } from "lucide-react";
import IconHeart from "./IconHeart";
// import { Heart } from 'lucide-react';

const CardProduct = ({ item, accion }) => {

  return (
    <div>
      <Card style={{ width: '20rem' }} className='mt-2'>
        <div className='d-flex justify-content-between'>
          <Card.Img className='mt-3' variant='top' src={item.img} style={{ width: '6rem', height: '6em' }} />
          <div className='d-flex flex-column'>
            <span><Badge bg="success">Envio gratis</Badge> </span>
            <span><Badge bg="primary">LLega mañana</Badge> </span>
          </div>
        </div>
        <Card.Body >
          <Card.Title className='text-capitalize text-center d-flex justify-content-between'>
            <b>{item.nombre} </b>
            {accion == 'Favorito' ? <IconHeart /> : <span></span>}
          </Card.Title>
          <hr />
          <p><b>{item.descripcion} </b></p>
          <Row>
            <Col >Marca: {item.marca}</Col>
          </Row>
          <Row>
            <Col >SKU: {item.sku}</Col>
          </Row>
          <Row>
            <Col >Precio: {item.precio}</Col>
          </Row>
          <Row>
            <Col >Stock: {item.stock}</Col>
          </Row>
          <Row>
            <Col >Estado: {item.nuevousado}</Col>
          </Row>
          <Row>
            <Col className="d-flex justify-content-end">
              {accion == 'Modificar' ?
                <Button className='p-1 m-2 ' variant='outline-primary' size='md' > <Save /> Modificar</Button>
                : accion == 'Agregar' ?
                  <Button className='p-1 m-2 ' variant='outline-primary' size='md' > <Save /> Añadir </Button>
                  : <span></span>}
            </Col>

          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardProduct
