import { MovieCard } from "./MovieCard";
import styled from "styled-components";

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

export const Movies = () => {
  return (
    <div>
        <Content>
          <MovieCard />
        </Content>
    </div>
  );
};