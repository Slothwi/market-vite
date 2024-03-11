import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';

const Carrousel = () => {
    return (
        <Carousel className='mt-3'>
            <Carousel.Item interval={1000}>
                <CarouselImage imgUrl="../public/carrusel1.png" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <CarouselImage imgUrl="../public/carrusel2.png" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <CarouselImage imgUrl="../../carrusel3.png" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <CarouselImage imgUrl="../../carrusel4.png" />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;