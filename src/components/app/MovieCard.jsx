import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import '../../styles/main.css';


const Card = styled.li`
    border-radius: 10px;
    list-style:none;
`
const Imag = styled.img`
    padding: 10px;
    border-radius: 10px;
    background-color: #ddd4d4;
    margin-bottom: 5px;
    width: 300px;
    height: 345px;
`
const Title = styled.div`
    margin-bottom: 50px;
    color: white;
    text-decoration: none;
`

export const MovieCard = () =>{
    const [movies, setMovies]= useState([]);
    
    useEffect(() => {
        obtenerDatos();
      },[]);

    const obtenerDatos = async () => {
        const url = `https://sprint3-movies.herokuapp.com/movies`;
        const resp = await axios.get(url);
        const data = await resp.data;
        setMovies(data);
        return data;
        
    }

    return (
        <>
            {movies.map((movie)=>{
                return(
                 <Card key={movie.id}>
                     <Link to={`/movies/${movie.id}`} className="ruta">
                    <Imag src={movie.image} alt="" />
                    <Title>{movie.title}</Title>
                    </Link>
                    </Card>
                )
                    
            })}
    </>
        
        )
}