import * as types from './actionTypes';

const initialMovieState = {
    movies: [],
    movie: {
        title: '',
        director: '',
        metascore: '',
        stars: []
    }
}

export default function movieReducer(state=initialMovieState, action) {
    switch(action.type) {
        case types.ADD_MOVIE: 
            return {...state, movies: state.movies.concat(action.payload)}
        case types.RENDER_MOVIES: 
            return {...state, movies: action.payload}
        case types.UPDATE_MOVIE: 
            return {...state, movies: state.movies.filter(movie => movie.id !== action.payload.id).concat(action.payload)}
        case types.DELETE_MOVIE: 
            return {...state, movies: state.movies.filter(movie => movie.id !== action.payload)}
        case types.FETCH_MOVIE:
            return {...state, movie: {...action.payload}}
        default: return state
    }
}

const initialFormValues = {
    formValues: {
        title: '',
        director: '',
        metascore: '',
        stars: []
    }
}

export function formReducer(state=initialFormValues, action) {
    switch (action.type) {
        case types.ON_UPDATE_MOVIE:
            return {...state, formValues: action.payload}
        case types.ON_INPUT_CHANGE:
            return {...state, formValues: {
                ...state.formValues, [action.payload.target.name]: action.payload.target.value
            }}
        case types.ON_FORM_SUBMIT: 
            return state
        default: 
        return state
    }
}