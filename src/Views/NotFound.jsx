import { Container } from "react-bootstrap";

const NotFound = () => {
  return (
    <Container className="text-center">
      <h2 className="m-3">La ruta es inválida</h2>
      <img className="imgsize" src="src/assets/NotFound.png" alt="not found" />
    </Container>
  );
};
export default NotFound;