import React from "react";
import { useHistory } from "react-router-dom";
import { v1 } from "uuid";

export default function SavedList({ list }) {
  const history = useHistory();

  function handleHomeClick() {
    history.push("/");
  }

  return (
    <div className="saved-list">
      <h3>Saved Movies:</h3>
      {list.map((movie) => (
        <span className="saved-movie" key={v1()}>
          {movie.title}
        </span>
      ))}
      <div className="home-button" onClick={handleHomeClick}>
        Home
      </div>
    </div>
  );
}
