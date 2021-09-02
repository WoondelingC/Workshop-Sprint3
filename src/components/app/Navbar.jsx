import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../actions/auth";
import styled from "styled-components";
import logo from "../../asset/logo.png";

const gridUl = {
  display: "flex",
  listStyle: "none",
  color: "#fff",
  paddingTop: "3.5vh",
};

const textDecoration = { textDecoration: "none", listStyle: "none" };
const hInputNav = { height: "44px" };

/* Navbar  */
const Nav = styled.div`
  height: 112px;
  background-color: #0c0e16;
`;

export const Navbar = ({ searchMovie }) => {
  const dispatch = useDispatch();
  const { name } = useSelector((state) => state.auth);

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log("buscando");
  }

  return (
    <Nav>
      <ul style={gridUl}>
        <Link to="/inicio">
          <img src={logo} alt="logo" />
        </Link>
        <Link to="/movie" style={textDecoration}>
          <li>Todas</li>
        </Link>
        <Link to="/movie" style={textDecoration}>
          <li>Mas valoradas</li>
        </Link>
        <Link to="/" style={textDecoration}>
          <li>Agregar</li>
        </Link>
        <li className="text-white" onClick={() => dispatch(startLogout())}>
          logout
        </li>
        <li className="text-white d-flex">{name}</li>

        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            onChange={e=> console.log(e.target.value)}

          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
      </ul>
    </Nav>
  );
};
