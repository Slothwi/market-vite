import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from 'react';
import { getAllPosts } from "../services/ProductServices";
import Loading from "../components/Loading";
import CardProductMyPosts from "../components/CardProductMyPosts";
import ScreenEmpty from "../components/ScreenEmpty";

const Mypublications = () => {
    const [arrayPosts, setArrayPosts] = useState([]);
    const [isLoading, setisLoading] = useState(false)

    const [textTitle,] = useState('No tienes productos publicados')
    const [textMsg,] = useState('¡Publica con nosotros!')
    const [myPosts,] = useState('/Myposts.jpg')

    const getMyPosts = async () => {
        const data = await getAllPosts()
        setArrayPosts(data.myPosts);
    };

    useEffect(() => {
        const fetchData = async () => {
            setisLoading(true)
            await getMyPosts();
            setisLoading(false)
        }
        fetchData()
    }, []); // eslint-disable-next-line react-hooks/exhaustive-deps

    return (

        <Container>
        <Row className="p-2">
        <h2>Mis Publicaciones</h2>
            {isLoading ?
                <Loading />
                :
                Array.isArray(arrayPosts) && arrayPosts.length > 0
                    ? arrayPosts.map((item) => (
                        <Col key={item.id_producto} className='ms-2'>
                            <CardProductMyPosts item={item} />
                        </Col>
                    ))
                    : <ScreenEmpty imageSrc={myPosts} textTitle={textTitle} textMsg={textMsg}  />
            }
        </Row>
    </Container >
       
    );
};

export default Mypublications;