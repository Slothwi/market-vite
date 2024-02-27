import { Container } from "react-bootstrap";


const Cart = () => {


    return (
    <Container className="cart">
        <h1>Este es tu carrito</h1>
        <img className="engimg" src={carro} alt="engranaje_img" />
    </Container>
    );
};

export default Cart;