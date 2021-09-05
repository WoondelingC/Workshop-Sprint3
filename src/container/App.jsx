import "bootstrap/dist/css/bootstrap.min.css";
import Carusel from "../components/app/Carusel";
import { Movies } from "../components/app/Movies";
import styled from "styled-components";
import { Navbar } from "../components/app/Navbar";



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


export const App = () => {

  return(

    <div>
      <Navbar />
      <header>
        <Carusel />
        <Titulo>Movies</Titulo>
      </header>
      <main>
        <Movies />
      </main>
    </div>
  )
};
