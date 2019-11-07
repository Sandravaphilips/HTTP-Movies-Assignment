import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import * as actionCreators from "../state/actionCreators";


export class MovieList extends Component {
  constructor(props) {
    super(props);
    debugger
  }

  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    return (
      <div className="movie-list">
        {this.props.movies.map(movie => (
          <MovieDetails key={movie.id} movie={movie} />
        ))}
      </div>
    );
  }
}

function MovieDetails({ movie }) {
  return (
    <Link to={`/movies/${movie.id}`}>
      <MovieCard movie={movie} />
    </Link>
  );
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    movie: state.movie
  }
}

export default connect(mapStateToProps, actionCreators)(MovieList)
