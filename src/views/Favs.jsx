
import { Container, Row, Col } from "react-bootstrap";
import CardProductFavs from '../components/CardProductFavs'
import { useEffect, useState } from 'react';
import { getProductsFavs } from "../services/ProductServices";
import ScreenEmpty from "../components/ScreenEmpty";
import Loading from "../components/Loading";
import { deleteProdFavs } from '../services/ProductServices';

const Favs = () => {
    const [arrayFavs, setArrayFavs] = useState([]);
    const [isLoading, setisLoading] = useState(false)

    const [textTitle,] = useState('No tienes productos seleccionados')
    const [textMsg,] = useState('¡Intentalo nuevamente! 🤑')
    const [newSearch,] = useState('/favoritos.png')

    const removeProdFav = async (id) => {
        const token = window.sessionStorage.getItem('token')
        if (token) {
            const response = await deleteProdFavs(token, id)
            if (response?.status == 200) {                
                await getProdsFavs()
            }
            else {
                console.log('producto no eliminado')
            }
        }
        else { console.log('Error GetProdFavs token invalido') }
    }


    const getProdsFavs = async () => {
        const token = window.sessionStorage.getItem('token')

        if (token) {
            const data = await getProductsFavs(token)
            setArrayFavs(data.Products)
        }
        else {
            console.log('Error GetProdFavs token invalido')
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            setisLoading(true)
            await getProdsFavs()
            setisLoading(false)
        }
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <Container>
            <Row className="p-2">
                <h2 >Mis Favoritos</h2>
                {isLoading ?
                    <Loading />
                    :
                    Array.isArray(arrayFavs) && arrayFavs.length > 0
                        ? arrayFavs.map((item) => (
                            <Col key={item.id_prod_favorito} className='ms-2'>
                                <CardProductFavs item={item} removeProdFav={removeProdFav} />
                            </Col>
                        ))
                        : <ScreenEmpty imageSrc={newSearch} textTitle={textTitle} textMsg={textMsg} />
                }
            </Row>
        </Container >
    );
};

export default Favs;