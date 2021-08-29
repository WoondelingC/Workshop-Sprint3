import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import styled from "styled-components";


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
`


export const MovieCard = () =>{
    const [movies, setMovies]= useState([]);
    console.log(movies);
    useEffect(() => {
        obtenerDatos();
      },[]);

    const obtenerDatos = async () => {
        const url = `https://sprint3-movies.herokuapp.com/movies`;
        const resp = await axios.get(url);
        const data = await resp.data;
        setMovies(data);console.log(data);
        return data;
        
    }

    return (
        <>
            {movies.map(()=>{
                return(
                 <>
                 <Card>
                    <Imag src={movies.image} alt="" />
                    <Title>{movies.title}</Title>
                    </Card>
                 </>
                )
                    
            })}
    </>
        
        )
}