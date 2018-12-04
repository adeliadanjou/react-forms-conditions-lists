import React from 'react';

class DynamicMoviesList extends React.Component {
    constructor() {
        super();
        this.state = {
            movies: [
                { title: "The Godfather", director: "Francis Coppola" },
                { title: "Star Wars", director: "Rian Johnson" },
                { title: "The Shawshank Redemption", director: "Frank Darabont" }
            ]
        }
    }

    movieRemoval = () => {
        let moviesCopy = [...this.state.movies]
        moviesCopy.splice(0, 2)
        this.setState({
            ...this.state,
            movies: moviesCopy
        })
    }

    render() {
        return (
            <div>
                <button onClick={this.movieRemoval}>Remove one movie</button>
                {
                    this.state.movies.map((oneMovie, index) => <li key={index}>{oneMovie.title}</li>)
                }
            </div>
        );
    }
}

export default DynamicMoviesList;