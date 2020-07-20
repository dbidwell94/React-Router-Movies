import React, { useState, useEffect } from "react";
import axios from "axios";
import SavedList from "./Movies/SavedList";
import { Switch, Route } from "react-router-dom";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

const App = () => {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get("http://localhost:5000/api/movies")
        .then((response) => {
          setMovieList(response.data);
        })
        .catch((error) => {
          console.error("Server Error", error);
        });
    };
    getMovies();
  }, []);

  const addToSavedList = (movie) => {
    if (!saved.includes(movie)) {
      setSaved([...saved, movie]);
    }
  };

  return (
    <div>
      <SavedList list={saved} />
      <Switch>
        <Route path="/:id">
          <Movie addSaved={addToSavedList} />
        </Route>
        <Route path="/">
          <MovieList movies={movieList} />
        </Route>
      </Switch>
    </div>
  );
};

export default App;
