import React, { useState } from 'react'

const Buscador = ({searchMovie, setSearchMovie}) => {

  //const [searchMovie, setSearchMovie] = useState([])

    const search = (e)=>{
        console.log(e.target.value);
        setSearchMovie(e.target.value);
    }

    const buscar = (e)=>{
        e.preventDefault();
    } 

    return (
  
        <form className="d-flex buscador" onSubmit={buscar} >
          <input
            className="form-control me-2"
            type="text"
            placeholder="Busca tu pelicula favorita"
            value={searchMovie}
            onChange={search}

          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
        
    )
}

export default Buscador
