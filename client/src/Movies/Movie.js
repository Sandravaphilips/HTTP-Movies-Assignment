import React from "react";
import { Link } from "react-router-dom";
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
    addToSavedList(this.props.moviesState.movie);
  };
  
  render() {
    
    if (!this.props.moviesState.movie) {
      return <div>Loading movie information...</div>;
    }
    
    return (
      <div className="save-wrapper">
        <MovieCard movie={this.props.moviesState.movie} />
        <div className="save-button" onClick={this.saveMovie}>
          Save
        </div>
        <Link to={`/update-movie/${this.props.moviesState.movie.id}`}>
          <button onClick={()=> this.props.onUpdateMovie(this.props.moviesState.movie)} >Edit</button>
        </Link>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    moviesState: state.moviesState,
    formValues: state.formValues
  }
}

export default connect(mapStateToProps, actionCreators)(Movie)
