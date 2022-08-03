import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Movie from "./Movie";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/movies.json")
      .then((res) => {
        setMovies(res.data.data);
        console.log(movies);
      })
      .catch((err) => console.log(err));
  }, [movies.length]);

  const list = movies.map((item) => {
    return <Movie key={item.attributes.name} attributes={item.attributes} />;
  });

  return (
    <div className="home">
      <div className="header">
        <h1>Tucritica</h1>
      </div>
      <div className="subheader">
        <p>Las mejores reviews de manera anonima</p>
      </div>
      <div className="grid">
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default Movies;
