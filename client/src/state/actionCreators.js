import * as types from './actionTypes';
import axios from "axios";

export const renderMovies = (movies) => {
    return {type: types.RENDER_MOVIE, payload: movies};
};

export const fetchMovies = () => dispatch => {
    axios.get('http://localhost:5000/api/movies')
    .then(response => dispatch(renderMovies(response.data)))
    .catch(err => console.log(err))
};

export const updateMovie = (movie) => {
    return {type: types.UPDATE_MOVIE, payload: movie}
};

export const deleteMovie = id => {
    return {type: types.DELETE_MOVIE, payload: id}
};

export const addMovie = movie => {
    return {type: types.ADD_MOVIE, payload: movie}
};
