import {FaPlus as Mas} from "react-icons/fa";
import {FaPlay as Play} from "react-icons/fa";
import Carousel from 'react-bootstrap/Carousel'
import Button from 'react-bootstrap/Button'     
import { useEffect, useState } from "react";
import axios from "axios";

const Carusel = () => {

    const [clips, setClips]= useState([]);
    console.log(clips);
    useEffect(() => {
        obtenerVideo();
      },[]);

    const obtenerVideo = async () => {
        const url = `https://sprint3-movies.herokuapp.com/trailers`;
        const resp = await axios.get(url);
        const data = await resp.data;
        setClips(data);console.log(data);
        return data;
        
    }

    return (
        <Carousel>
  <Carousel.Item className="carusel" interval={3000}>
  <iframe width="100%" height="480" src="https://www.youtube.com/embed/7UiFFLH0ETE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    <Carousel.Caption>
    
     <Button variant="warning">  <Play /> VER AHORA</Button>  <Button variant="dark"> <Mas /> VER DESPUES</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carusel" interval={3000}>
  <iframe width="100%" height="480" src="https://www.youtube.com/embed/v7F6oTFc7Eg" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    <Carousel.Caption>
  
    <Button variant="warning">  <Play /> VER AHORA</Button>  <Button variant="dark"> <Mas /> VER DESPUES</Button>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item className="carusel" interval={3000}>
  <iframe width="100%" height="480" src="https://www.youtube.com/embed/My9guChk6WU" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
    <Carousel.Caption>
     
    <Button variant="warning">  <Play /> VER AHORA</Button>  <Button variant="dark" > <Mas /> VER DESPUES </Button>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    )
}

export default Carusel
