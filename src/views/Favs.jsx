
import { Container, Row, Col, Card } from "react-bootstrap";
import CardProduct from '../components/CardProduct'
import { useEffect, useState } from 'react';
import { getProductsFavs } from "../services/ProductServices";


const Favs = () => {
    const [arrayFavs, setArrayFavs] = useState([]);

    const userData = window.sessionStorage.getItem('userData') !== null ?
        JSON.parse(window.sessionStorage.getItem('userData')) : null

    const getProdsFavs = async () => {
        const token = window.sessionStorage.getItem('token')
        if (token) {
            const email = { email: userData?.email }
            console.log('query', email)
            console.log('token', token)
            const data = await getProductsFavs(email, token)
            console.log(data)
            setArrayFavs(data.results)
        }
    };


    useEffect(() => {
        getProdsFavs();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);



    return (
        <Container>

            <Row className="p-2">
                <Card >
                    <Card.Header> <h4> <b> Favoritos </b></h4></Card.Header>
                    <Row className='mt-2'>
                        {arrayFavs.length > 0
                            ? arrayFavs.map((item) => (
                                <Col key={item.id} className='ms-2'>
                                    <CardProduct item={item} accion="Favorito" />
                                </Col>
                            ))
                            : <div>No hay datos</div>}
                    </Row>

                </Card>
            </Row>
        </Container>
    );
};

export default Favs;