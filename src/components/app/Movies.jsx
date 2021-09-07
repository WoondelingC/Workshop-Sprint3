import { MovieCard } from "./MovieCard";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { Navbar } from "./Navbar";
import Carusel from "./Carusel";

const Content = styled.ul`
    display: grid;
    grid-template-columns: repeat(auto-fill, 300px);
    gap: 20px;
    padding: 40px;
    font-size: 22px;
    text-align: center;
    font-weight: bold;
    justify-content: center;
    @media (max-width: 550px) {
        grid-template-columns: 100%;
    }
`
const Titulo = styled.h1`
  text-align: center;
  background: rgb(131, 58, 180);
  background: linear-gradient(
    90deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(0, 0, 0, 1) 50%,
    rgba(103, 252, 69, 1) 100%
  );
  color: white;
  margin: 0;
`;

export const Movies = () => {
  const [movies, setMovies]= useState([]);
  const [searchValue, setSearchValue] = useState('');
    
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

    let peliculaSearch = [];

    if(!searchValue.length >= 1){
      peliculaSearch = movies;

    } else {
      peliculaSearch = movies.filter((movie) => {
         const movieTitle = movie.title;
         const searchTitle = searchValue.toLowerCase();
         console.log(searchTitle)
         return movieTitle.includes(searchTitle.valueOf);
      })
      
    }


  return (
    <div>
      <Navbar 
      searchValue={searchValue}
      setSearchValue={setSearchValue} 
      />
      <header>
        <Carusel />
        <Titulo>Movies</Titulo>
      </header>
        <Content>
          {peliculaSearch.map((movie)=>{
            return <MovieCard key={movie.id} movie={movie} movieTitle={movie.title} />
          })
          }
          
        </Content>
    </div>
  );
};