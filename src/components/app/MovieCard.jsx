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
    const imagen = "https://image.tmdb.org/t/p/w300" + movie.poster_path;

    return (
        <Card>
            <Imag src={imagen} alt="" />
            <Title>{movie.title}</Title>
        </Card>
        )
}