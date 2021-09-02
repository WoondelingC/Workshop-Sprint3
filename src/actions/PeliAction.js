import {types} from '../types/types';
import {db} from '../firebase/firebaseConfig';


export const listarMovie = () => {

    return async(dispatch) => {
        const data = await db.collection(`/Movies`).get();
        const  = [];
    
        data.forEach(hero=>{
            movie.push({
                uid: movie.id,
            ...movie.data()
           })
        })
        console.log(movie)
        dispatch(listar(movie));

    }
}

export const listar = (movie) => {
    return {
        type: types.Listar,
        payload: movie
    }
}

//Buscador
export const listaSearch = (searchText) => {

    return async(dispatch) => {
        const data = await db.collection(`/Movies`).where('movie','==',searchText).get();
        const superheroe = [];
    
        data.forEach(hero=>{
            superheroe.push({
                uid: hero.id,
            ...hero.data()
           })
        })
        console.log(superheroe)
        dispatch(listarSe(superheroe));

    }
}

export const listarSe = (heroes) => {
    return {
        type: types.ListarBusqueda,
        payload: heroes
    }
}