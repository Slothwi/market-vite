import { Card, Button, Row, Col, Badge } from 'react-bootstrap'
import { Save } from "lucide-react";
import IconHeart from "./IconHeart";
import '../assets/css/CardProduct.css';

const CardProduct = ({ item, accion }) => {

  return (
    <div>
      <Card style={{ width: '17rem' }} className='mt-4' key={item.id}>
          <div className='d-flex mt-1 pe-1 justify-content-end'>
              {accion != 'Modificar' ? 
                    item.precio > 7000 ?
                      <Badge className='mr-1' bg="secondary">Envio gratis</Badge>
                          :
                      <Badge className='mr-1' bg="primary">LLega mañana</Badge>
                    : <span></span>}
          </div>
        <div className='d-flex'>

            <Card.Img className='mt-2 img_card' variant='top' src={item.img}  />
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
                {!item.nuevousado ? <p><mark>Nuevo</mark></p> : <p><mark>Usado</mark></p>}
                </small></span>
              {accion == 'Modificar' ?
                <Button className='p-1 m-2 ' variant='outline-secondary' size='md' > {/*<Save />*/} Modificar</Button>
                : accion == 'Agregar' ?
                  <Button className='p-1 m-2 ' variant='outline-success' size='md' > {/*<Save />*/} Añadir </Button>
                  : <span></span>}
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardProduct
