import { Card, Button, ListGroup } from 'react-bootstrap'

const CardProducto = ({ item }) => {

  return (
    <div>
      <Card style={{ width: '20rem' }} >
        <Card.Img variant='top' src={item.img} style={{ width: '8rem', height: '8em' }} />
        <Card.Body>
          <Card.Title className='text-capitalize text-center'> <b>{item.nombre} </b>  </Card.Title>
          <hr />

          <p><b>{item.descripcion} </b></p>
          <ListGroup variant="flush">
            <ListGroup.Item >Marca: {item.marca}</ListGroup.Item>
            <ListGroup.Item >SKU: {item.sku}</ListGroup.Item>
            <ListGroup.Item>Precio: {item.precio}</ListGroup.Item>
            <ListGroup.Item>Stock: {item.stock}</ListGroup.Item>
            <ListGroup.Item>Estado: {item.nuevousado}</ListGroup.Item>
          </ListGroup>

        </Card.Body>
        <Card.Footer className='text-center'>
          <Button className='p-1 m-2 text-white' variant='info' size='sm' >Modificar
          </Button>
        </Card.Footer>

      </Card>
    </div>
  )
}

export default CardProducto
