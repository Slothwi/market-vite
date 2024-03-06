import {Image} from 'react-bootstrap';

export default function CarouselImage({imgUrl}) {
  return (
         <Image className = "w-75 rounded " src= {imgUrl}  />
  )
}
