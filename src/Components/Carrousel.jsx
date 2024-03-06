import { Carousel } from 'react-bootstrap';
import CarouselImage from './CarouselImage';

const Carrousel = () => {
    return (
        <Carousel className='mt-3'>
            <Carousel.Item interval={1000}>
                <CarouselImage imgUrl="../src/assets/carrusel1.png" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <CarouselImage imgUrl="../src/assets/carrusel2.png" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <CarouselImage imgUrl="../src/assets/carrusel3.png" />
            </Carousel.Item>
            <Carousel.Item interval={1000}>
                <CarouselImage imgUrl="../src/assets/carrusel4.png" />
            </Carousel.Item>
        </Carousel>
    );
}

export default Carrousel;