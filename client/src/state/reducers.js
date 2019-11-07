import * as types from './actionTypes';

const initialMovieState = {
    movies: [],
    movie: {}
}

export default function movieReducer(state=initialMovieState, action) {
    switch(action.type) {
        case types.ADD_MOVIE: 
            return {...state, movies: state.movies.concat(action.payload)}
        case types.RENDER_MOVIES: 
            return {...state, movies: action.payload}
        case types.UPDATE_MOVIE: 
            return {...state, movies: state.movies.filter(movie => movie.id !== action.payload.id).concat(action.payload.movie)}
        case types.DELETE_MOVIE: 
            return {...state, movies: state.movies.filter(movie => movie.id !== action.payload)}
        case types.FETCH_MOVIE:
            return {...state, movie: state.movies.filter(movie => movie.id === action.payload)}
        default: return state
    }
}