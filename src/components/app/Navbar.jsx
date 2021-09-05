import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import styled from "styled-components";
import logo from "../../asset/logo.png";
import { useState } from "react";

const Ul = styled.ul`
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;
    color: #fff;
    padding-top: 3.5vh;
`
const textDecoration = { textDecoration: "none", listStyle: "none" };

/* Navbar  */
const Nav = styled.div`
  height: 112px;
  background-color: #0c0e16;
`

export const Navbar = () => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const [searchValue, setSearchValue] = useState('')

  const search = (e)=>{
    console.log(e.target.value);
    setSearchValue(e.target.value);
}


  return (
    <Nav>
      <Ul>
        <img src={logo} alt="logo" />
          
        <Link to="/movie" style={textDecoration}>
          <li>Todas</li>
        </Link>
        <Link to="/movie" style={textDecoration}>
          <li>Mas valoradas</li>
        </Link>
        <Link to="/agregar" style={textDecoration}>
          <li>Agregar</li>
        </Link>
        <Link to="/auth" style={textDecoration}>
        <li onClick={() => dispatch(startLogout())}>
          logout
        </li>
        </Link>
        <li className="text-danger d-flex">{name}</li>

        <form className="d-flex buscador" >
          <input
            className="form-control me-2"
            type="text"
            placeholder="Busca tu pelicula favorita"
            value={searchValue}
            onChange={search}
          />
          
        </form>

      </Ul>
    </Nav>
  );
};
