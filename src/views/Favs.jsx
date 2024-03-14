
import { Container, Row, Col, Card } from "react-bootstrap";
import CardProduct from '../components/CardProduct'
import { useEffect, useState } from 'react';
import { getProductsFavs } from "../services/ProductServices";
import ScreenEmpty from "../components/ScreenEmpty";


const Favs = () => {
    const [arrayFavs, setArrayFavs] = useState([]);

    const [textTitle, ] = useState('No tienes productos seleccionados')
    const [textMsg, ] = useState('¡Intentalo nuevamente! 🤑')
    const [newSearch, ] = useState('/favoritos.png')

    const getProdsFavs = async () => {
        const token = window.sessionStorage.getItem('token')
        if (token) {
            const data = await getProductsFavs(token)
            console.log(data)
            setArrayFavs(data.results)
        }
        else {
            console.log('Carga favoritos')
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
                            :  <ScreenEmpty imageSrc={newSearch} textTitle={textTitle} textMsg={textMsg} />    
                            }
                    </Row>
                </Card>
            </Row>
        </Container>
    );
};

export default Favs;