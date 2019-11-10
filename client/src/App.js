import React, { useState } from "react";
import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";
import { connect } from "react-redux";
import UpdateMovie from "./Movies/UpdateMovie";
import { AddMovie } from "./Movies/AddMovie";
import * as actionCreators from "./state/actionCreators";

const App = props => {
  const [savedList, setSavedList] = useState([]);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <>
      <SavedList list={savedList} />
      <Link to="/add-movie" >
        Add Movie
      </Link>
      <Route exact path="/" component={MovieList} />
      <Route
        path="/movies/:id"
        render={props => {
          return <Movie {...props} addToSavedList={addToSavedList} />;
        }}
      />
      <Route path="/update-movie/:id" component={UpdateMovie} />
      <Route path="/add-movie" component={AddMovie} />
    </>
  );
};

const mapStateToProps = state => {
  return {
    movies: state.movies,
    movie: state.movie,
    formValues: state.formValues
  }
}

export default connect(mapStateToProps, actionCreators)(App)
