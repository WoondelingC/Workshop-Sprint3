import { types } from '../types/types';
import React from 'react';

const initialState = {
    heroe: [],
    search: []
}

export const heroesReducer = (state = initialState, action) => {
    switch (action.type) {

        case types.Listar:
            return {
                state,
                movies: [...action.payload]
            }
        case types.ListarBusqueda:
            return {
                ...state,
                search: [...action.payload]
            }

        default:
            return state;
    }
}