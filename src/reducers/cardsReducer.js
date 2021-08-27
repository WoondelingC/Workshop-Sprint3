import {types} from "../types/types";

const initialState = {
    card:[]
}

export const cardsReducer = (state= initialState, action) =>{
    
    switch (action.type) {
        case types.cardAddNew:
            return{
                ...state, //llama al estado inicial
                card: [action.payload, ...state.card]//recibe informacion y la guarda en el estado de la tarjeta
            }
        default:
            return state;
    }
}