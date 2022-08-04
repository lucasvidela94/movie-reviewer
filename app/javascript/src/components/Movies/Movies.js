import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Movie from "./Movie";
import styled from "styled-components";

const Home = styled.div`
  text-align: center;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
`;

const Header = styled.div`
  padding: 100px 100px 10px 100px;
  h1 {
    font-size: 42px;
  }
`;
const Subheader = styled.div`
  font-weight: 300;
  font-size: 26px;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  width: 100%;
  padding: 20px;
`;

const Movies = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get("/api/v1/movies.json")
      .then((res) => {
        setMovies(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [movies.length]);

  const list = movies.map((item) => {
    return <Movie key={item.attributes.name} attributes={item.attributes} />;
  });
  return (
    <Home>
      <Header>
        <h1>Tucritica</h1>
      </Header>
      <Subheader>
        <p>Las mejores reviews de manera anonima</p>
      </Subheader>
      <Grid>{list}</Grid>
    </Home>
  );
};

export default Movies;
