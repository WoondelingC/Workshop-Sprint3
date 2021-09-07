import {FaPlus as Mas} from "react-icons/fa";
import {FaPlay as Play} from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'     

const Carusel = () => {

  
    return (
        <Carousel>
  <Carousel.Item className="carusel" interval={3000}>
  <iframe width="100%" height="480" src="https://www.youtube.com/embed/sdKSnELUVl8" title="YouTube video player"></iframe>
    <Carousel.Caption>
    
     <Button variant="warning">  <Play /> VER AHORA</Button>  <Button variant="dark"> <Mas /> VER DESPUES</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carusel" interval={3000}>
  <iframe width="100%" height="480" src="https://www.youtube.com/embed/IH32hZwJLKg" title="YouTube video player" ></iframe>
    <Carousel.Caption>
  
    <Button variant="warning">  <Play /> VER AHORA</Button>  <Button variant="dark"> <Mas /> VER DESPUES</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carusel" interval={3000}>
  <iframe width="100%" height="480" src="https://www.youtube.com/embed/CapAQclmVnY" title="YouTube video player"></iframe>
    <Carousel.Caption>
     
    <Button variant="warning">  <Play /> VER AHORA</Button>  <Button variant="dark"> <Mas /> VER DESPUES </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Carusel
