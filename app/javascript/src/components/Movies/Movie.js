import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Card = styled.div`
  border: 1px solid gainsboro;
  background: #fff;
`;
const MovieLogo = styled.div`
  width: 58px;
  text-align: center;
  padding-top: 10px;
  margin-left: auto;
  margin-right: auto;
  img {
    height: 58px;
    width: 58px;
    border-radius: 100%;
    border: 1px solid #efefef;
  }
`;
const MovieName = styled.div``;
const MovieScore = styled.div``;
const MovieLink = styled.div`
  margin: 30px 0 20px 0;
  height: 50px;
  a {
    color: #fff;
    background: #000;
    border-radius: 4px;
    padding: 10px 50px;
    border: 1px solid #000;
    width: 100%;
    text-decoration: none;
  }
`;
const Movie = (props) => {
  return (
    <>
      <Card>
        <MovieLogo>
          <img src={props.attributes.image_url} />
        </MovieLogo>
        <p>aca abajo va</p>
        <MovieName>{props.attributes.name}</MovieName>
        <div className="movie-score">
          <p>{props.attributes.avg_score}</p>
        </div>
        <MovieLink>
          <Link to={`/movies/${props.attributes.slug}`}>
            Link de la pelicula
          </Link>
        </MovieLink>
      </Card>
    </>
  );
};

export default Movie;
