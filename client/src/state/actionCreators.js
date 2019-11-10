import * as types from './actionTypes';
import axios from "axios";

export const renderMovies = (movies) => {
    return {type: types.RENDER_MOVIES, payload: movies};
};

export const fetchMovies = () => dispatch => {
    axios.get('http://localhost:5000/api/movies')
    .then(response => dispatch(renderMovies(response.data)))
    .catch(err => console.log(err))
};

export const updateMovie = (movie) => {
    return {type: types.UPDATE_MOVIE, payload: movie}
};

export const putMovie = (id, movie) => dispatch => {
    axios.put(`http://localhost:5000/api/movies/${id}`, movie)
    .then(() => dispatch(fetchMovies))
    .catch(err => console.log(err))
}

export const delMovie = (id) => {
    return {type: types.DELETE_MOVIE, payload: id}
}

export const deleteMovie = id => dispatch => {
    axios.delete(`http://localhost:5000/api/movies/${id}`)
    .then(() => dispatch(fetchMovies()))
    .catch(err => console.log(err))
};

export const addMovie = movie => dispatch => {
    axios.post(`http://localhost:5000/api/movies/`, movie)
    .then(() => dispatch(fetchMovies()))
    .catch(err => console.log(err))
};

export const fetchMovie = movie => {
    return {type: types.FETCH_MOVIE, payload: movie}
}

export const renderMovie = (id) => dispatch => {
    axios.get(`http://localhost:5000/api/movies/${id}`)
    .then(response => dispatch(fetchMovie(response.data)))
    .catch(err => console.log(err))
}

export const onUpdateMovie = (movie) => {
    return {type: types.ON_UPDATE_MOVIE, payload: movie}
}

export const onInputChange = e => {
    return {
        type: types.ON_INPUT_CHANGE, payload: e
    }
}
