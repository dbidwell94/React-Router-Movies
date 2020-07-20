import React from "react";
import { v1 } from "uuid";
import { useRouteMatch, useHistory } from "react-router-dom";

const MovieList = ({movies}) => {
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieDetails key={v1()} movie={movie}/>
      ))}
    </div>
  );
};

function MovieDetails({ movie }) {
  const { path } = useRouteMatch();
  const hist = useHistory();

  function handleClickRoute(id) {
    hist.push(`${path}${id}`);
  }

  const { title, director, metascore } = movie;
  return (
    <div className="movie-card" onClick={() => handleClickRoute(movie.id)}>
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
    </div>
  );
}

export default MovieList;
