import React from 'react';
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";
import {Form} from "./UpdateMovie";

export function AddMovie(props) {
    function onFormSubmit(e) {
        e.preventDefault()
        props.addMovie(props.formValues.formValues)
        props.history.replace('/')
    }
    debugger
    return (
        <Form onFormSubmit={onFormSubmit} onInputChange={props.onInputChange} formValues={props.formValues} />
    )
}

const mapStateToProps = state => {
    return {
      movies: state.movies,
      movie: state.movie,
      formValues: state.formValues
    }
}
  
export default connect(mapStateToProps, actionCreators)(AddMovie);

