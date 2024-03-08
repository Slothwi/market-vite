import { Card, Button, Row, Col, Badge } from 'react-bootstrap'
import { Save } from "lucide-react";
import IconHeart from "./IconHeart";

const CardProduct = ({ item, accion }) => {

  return (
    <div>
      <Card style={{ width: '15rem' }} className='mt-2' key={item.id}>
        <div className='d-flex justify-content-between'>
          <Card.Img className='mt-3' variant='top' src={item.img} style={{ width: '6rem', height: '6em' }} />
          <div className='d-flex flex-column'>
            {accion != 'Modificar' ? 
                  item.precio > 10000 ?
                     <span><Badge bg="secondary">Envio gratis</Badge> </span>
                        :
                     <span><Badge bg="primary">LLega mañana</Badge> </span>
                  : <span></span>}
          </div>
        </div>

        <Card.Body >
          <Card.Title className='m-0 text-capitalize text-center d-flex justify-content-between'>
            <b>{item.nombre} </b>
            {accion == 'Favorito' ? <IconHeart /> : <span></span>}
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
                {item.nuevousado ? <p><mark>Usado</mark></p> : <p><mark>Nuevo</mark></p>}
                </small></span>
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
