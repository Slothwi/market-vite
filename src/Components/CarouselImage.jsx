import {Image} from 'react-bootstrap';

export default function CarouselImage({imgUrl}) {
  return (
         <Image className = "w-100 rounded " src= {imgUrl}  />
  )
}
