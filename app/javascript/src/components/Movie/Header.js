import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 50px 100px 50px 0;
  font-size: 30px;

  img {
    height: 50px;
    width: 50px;
    border-radius: 100%;
    border: 1px solid green;
    margin-bottom: -8px;
  }
`;

const TotalReviews = styled.div`
  font-size: 18px;
  padding: 10px 0;
`;

const TotalRating = styled.div``;

const TotalStars = styled.div`
  font-size: 18px;
  font-weight: bolder;
  padding: 10px 0;
`;

const Header = ({ name, reviews, avg_score, ...props }) => {
  // const total = props.review;
  console.log("El objeto:", name);
  console.log("El objeto:", image_url);
  console.log("El objeto:", avg_score);
  console.log(props);
  // console.log("El objeto:", review);
  return (
    <Wrapper>
      <div>
        <h1>
          <img src={image_url} />
          {name}
        </h1>
        <TotalReviews>
          {/* <span>{review ? review.length : 0}</span> */}
          criticas
        </TotalReviews>
        <div className="totalRating"></div>
        <TotalStars>{avg_score.toFixed(1)} out of 5</TotalStars>
      </div>
    </Wrapper>
  );
};

export default Header;
