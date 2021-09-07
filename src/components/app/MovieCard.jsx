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

export const MovieCard = ({movie}) =>{
    

    return (    
            <Card>
                <Link to={`/movies/${movie.id}`} className="ruta">
                    <Imag src={movie.image} alt="" />
                    <Title>{movie.title}</Title>
                </Link>
            </Card>
    )                 
}