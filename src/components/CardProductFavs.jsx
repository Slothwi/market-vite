import { Card, Button, Row, Col, Badge } from 'react-bootstrap'
import '../assets/css/CardProduct.css';
import IconHeart from './IconHeart';


const CardProductFavs = ({ item, removeProdFav }) => {

  return (
    <div>
      <Card style={{ width: '17rem' }} className='mt-4' key={item.id_prod_favorito}>          :

        <div className='d-flex mt-1 pe-1 justify-content-end'>
        {item.precio > 7000 ?
              <Badge className='mr-1' bg="secondary">Envio gratis</Badge>
              :
              <Badge className='mr-1' bg="primary">LLega mañana</Badge>
          }
        </div>
        <div className='d-flex'>

          <Card.Img className='mt-2 img_card' variant='top' src={item.img} />
        </div>

        <Card.Body >
          <Card.Title className='m-0 text-capitalize text-center d-flex justify-content-between'>
            <b>{item.nombre} </b>
            <div key={item.id} onClick={() => removeProdFav(item.id_prod_favorito)}>
              <IconHeart filled={true} ></IconHeart>
            </div>

          </Card.Title>

          <div className='m-0'><small>{item.marca_producto}</small></div>

          <hr />
          <p><b>{item.descripcion} </b></p>

          <Row>
            <Col >SKU: {item.sku}</Col>
          </Row>
          <Row>
            <Col >Stock: {item.stock}</Col>
          </Row>
          <Row>
            <Col ><strong> ${item.precio_lista.toLocaleString()}</strong></Col>
          </Row>

          <Row>
            <Col className="d-flex justify-content-between align-items-center mt-1">
              <span><small>{!item.usado
                ?
                <p><mark>Nuevo</mark></p>
                :
                <p><mark>Usado</mark></p>}
              </small></span>
              <Button className='p-1 m-2 ' variant='outline-success' size='md' >  Añadir </Button>

            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  )
}

export default CardProductFavs
