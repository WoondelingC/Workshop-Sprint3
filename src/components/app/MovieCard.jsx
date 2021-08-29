import axios from "axios";
import { Fragment } from "react";
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


export const MovieCard = ({movie}) =>{
    /*const [movies, setMovies]= useState();

    const obtenerDatos = async (count) => {
        const url = `https://sprint3-movies.herokuapp.com/movies`;
        const resp = await axios.get(url);
        const data = await resp.data;
        setMovies(data);
        return data;
    }*/

    return (
        <Card>
            {movies.map ((movie)=>{
                return (
                    <Fragment>
                        <Imag src={movie.imageUrl} alt="" />
                        <Title>{movie.title}</Title>
                    </Fragment>
                )

            })}
            
        </Card>
        )
}