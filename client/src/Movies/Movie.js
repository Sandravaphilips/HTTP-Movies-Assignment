import React from "react";

import MovieCard from "./MovieCard";
import { connect } from "react-redux";
import * as actionCreators from "../state/actionCreators";

export class Movie extends React.Component {
    
  componentDidMount() {
    
    this.props.renderMovie(this.props.match.params.id);
    
  }

  // componentWillReceiveProps(newProps) {
  //   if (this.props.match.params.id !== newProps.match.params.id) {
  //     this.props.renderMovie(newProps.match.params.id);
  //   }
  // }

  saveMovie = () => {
    const addToSavedList = this.props.addToSavedList;
    addToSavedList(this.props.movie);
  };
  
  render() {
    
    if (!this.props.movie) {
      return <div>Loading movie information...</div>;
    }
    
    return (
      <div className="save-wrapper">
        <MovieCard movie={this.props.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    movies: state.movies,
    movie: state.movie
  }
}

export default connect(mapStateToProps, actionCreators)(Movie)
