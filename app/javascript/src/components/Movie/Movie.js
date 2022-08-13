import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "./Header";
import styled from "styled-components";
import ReviewForm from "./ReviewForm";

// Styled components
const Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;
const Column = styled.div`
  background: #fff;
  height: 100vh;
  overflow: scroll;

  &:last-child {
    background: black;
  }
`;
const Main = styled.div`
  padding-left: 50px;
`;

const Movie = (props) => {
  const [movies, setMovie] = useState({});
  const [review, setReview] = useState({
    title: "",
    description: "",
    score: 0,
  });
  const [reviews, setReviews] = useState([]);
  const [loaded, isLoaded] = useState(false);

  // With useParams i can search the slug from the response
  const { slug } = useParams();

  // Event handlers for ReviewForm
  const handleChange = (e) => {
    e.preventDefault();
    setReview(Object.assign({}, review, { [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // Setting up Csrf token for the header petition
    const csrfToken = document.querySelector("[name = csrf-token]").content;
    axios.defaults.headers.common["X-CSRFTOKEN"] = csrfToken;

    // Settin up axios request for reviews endpoint with review_id and movie_id

    const movie_id = movies.data.id;
    axios
      .post("/api/v1/reviews", { review, movie_id })
      .then((res) => {
        setReviews([...reviews, res.data.data]);
        setMovie({ ...movies, included });
        setReview({ title: "", description: "", score: 0 });
      })
      .catch((res) => {});
  };

  const setRating = (score, e) => {
    e.preventDefault();

    setReview({ ...review, score });
  };

  // Set average

  let total,
    average = 0;

  if (reviews && reviews.length > 0) {
    total = reviews.reduce(
      (total, review) => total + review.attributes.score,
      0
    );
    average = total > 0 ? parseFloat(total) / parseFloat(reviews.length) : 0;

    userReviews = reviews.map((review, index) => {
      return (
        <Review
          key={index}
          id={review.id}
          attributes={review.attributes}
          handleDestroy={handleDestroy}
        />
      );
    });
  }

  // First useEffect for the request from our api by axios

  useEffect(() => {
    const url = `/api/v1/movies/${slug}`;
    axios
      .get(url)
      .then((res) => {
        setMovie(res.data);
        isLoaded(true);
      })
      .catch((res) => console.log(res));
  }, []);
  // Only when Loaded state is true only after the app will render itself
  return (
    <Wrapper>
      {loaded && (
        <>
          <Column>
            <Main>
              <Header
                attributes={movies.data.attributes}
                reviews={reviews}
                avg_score={review}
              />
              <div className="reviews"></div>
            </Main>
          </Column>
          <Column>
            <ReviewForm
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              setRating={setRating}
              attributes={movies.data.attributes}
              review={review}
            />
          </Column>
        </>
      )}
    </Wrapper>
  );
};

export default Movie;
