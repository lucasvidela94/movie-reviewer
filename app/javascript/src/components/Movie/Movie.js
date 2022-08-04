import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";

const Movie = (props) => {
  const [movie, setMovie] = useState({});
  const [review, setReview] = useState({});
  const [loaded, isLoaded] = useState(false);

  const { slug } = useParams();
  useEffect(() => {
    console.log(slug);
    const url = `/api/v1/movies/${slug}`;
    axios
      .get(url)
      .then((res) => {
        setMovie(res.data);
        isLoaded(true);
      })
      .catch((res) => console.log(res));
  }, []);
  return (
    <div className="wrapper">
      <div className="column">
        {loaded && (
          <Header
            attributes={movies.data.attributes}
            reviews={movies.included}
          />
        )}
        <div className="reviews"></div>
      </div>
      <div className="column">
        <div className="review-form">La critica va a aca </div>
      </div>
    </div>
  );
};

export default Movie;
