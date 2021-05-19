import React from 'react';

// init ScaleDynamics Platform
import * as Backend from './.backend/backend.js';

const { fetchMovies } = new Backend();

export default class Mongo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: {},
    };
  }

  componentDidMount() {
    // fetchMovies from mongodb
    fetchMovies('Star Trek').then((data) => this.setState({ movies: data }));
  }

  render() {
    return (
      <div className="mongodb centered">
        <div className="centered">
          <span><a href="https://www.mongodb.com/">MongoDB</a> in action</span>
        </div>
        <div className="results">
          <pre>{JSON.stringify(this.state.movies, null, 2)}</pre>
        </div>
      </div>
    );
  }
}