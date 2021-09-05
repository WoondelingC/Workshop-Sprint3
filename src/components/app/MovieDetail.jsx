import axios from "axios";
import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Navbar } from "./Navbar";
import '../../styles/main.css'



const MovieDetail = (props) => {

  
  const [movies, setMovies]= useState([]);



      console.log(movies);
  

    useEffect(() => {
        
      obtenerDatos()

      },);

    const obtenerDatos = async () => {
        const url = `https://sprint3-movies.herokuapp.com/movies/${props.match.params.id}`
        const resp = await axios.get(url);
        const data = await resp.data;
        setMovies(data);
        console.log(data);
        return data;
        
    }
    
    
  return (
    <>
    <Navbar />
    <Card className="cardMovie">
      <Card.Img className="cardImg" variant="top" src={movies.image} />
      <Card.Body>
        <Card.Title>{movies.fullTitle}</Card.Title>
        <Card.Text>{movies.crew}({movies.year})</Card.Text>
        <Link to="/movie"><Button variant="secondary" className
        ="boton">Regresar</Button></Link>
      </Card.Body>
    </Card>
    </>
  );
};

export default MovieDetail;
