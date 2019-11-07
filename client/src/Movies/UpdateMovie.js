import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export function UpdateMovie(props) {
    const {id} = props.match.params;

    function onFormSubmit(e) {
        e.preventDefault()
        props.putMovie(id, props.formValues.formValues)
        props.history.replace('/')
    }
    // debugger
    return (
        <form onSubmit={onFormSubmit}>
            <label>
                Title
                <input type="text" name="title" onChange={props.onInputChange} value={props.formValues.formValues.title} />
            </label>

            <label>
                Director
                <input type="text" name="director" onChange={props.onInputChange} value={props.formValues.formValues.director} />
            </label>

            <label>
                Metascore
                <input type="text" name="metascore" onChange={props.onInputChange} value={props.formValues.formValues.metascore} />
            </label>

            <label>
                Stars
                <input type="text" name="stars" onChange={props.onInputChange} value={props.formValues.formValues.stars} />
            </label>

            
            <input type="submit" />
            
        </form>
    )
}

const mapStateToProps = state => {
    return {
      movies: state.movies,
      movie: state.movie,
      formValues: state.formValues
    }
}
  
export default connect(mapStateToProps, actionCreators)(UpdateMovie)