import { Spinner } from "react-bootstrap";

const Loading = () => (

    <div className="loading d-flex flex-row justify-content-center">
        <Spinner animation="border" variant="primary" />
        <p className="p-2">Cargando.....</p>
    </div>

);
export default Loading;