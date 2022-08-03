import React from "react";

const Movie = (props) => {
  return (
    <>
      <div className="card">
        <div className="movie-logo">
          <img src={props.attributes.image_url} />
        </div>
        <div className="movie-name">{props.attributes.name}</div>
        <div className="movie-score">
          <p>aca abajo va</p>
          <p>{props.attributes.avg_score}</p>
        </div>
        <div className="movie-link">
          <a href={`/movies/${props.attributes.slug}`}> </a>
        </div>
      </div>
    </>
  );
};

export default Movie;
