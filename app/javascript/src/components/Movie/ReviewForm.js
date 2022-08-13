import React from "react";
import styled from "styled-components";

// Style for the rating wrapper
const RatingWrap = styled.div`
  text-align: center;
  border-radius: 6px;
  font-size: 18px;
  padding: 40px 0 10px 0;
  background: whitesmoke;
`;

// Style for the rating box
const RatingBox = styled.div`
  background: white;
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  position: relative;

  input {
    display: none;
  }

  /* This label contains three styles for the three diferentes states:normal,selected and hover */

  label {
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin-top: auto;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23e3e3e3' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 76%;
    transition: 0.3s;
  }
  input:checked ~ label,
  input:checked ~ label ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23fcd93a' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
  input:not(:checked) ~ label:hover,
  input:not(:checked) ~ label:hover ~ label {
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' width='126.729' height='126.73'%3e%3cpath fill='%23d8b11e' d='M121.215 44.212l-34.899-3.3c-2.2-.2-4.101-1.6-5-3.7l-12.5-30.3c-2-5-9.101-5-11.101 0l-12.4 30.3c-.8 2.1-2.8 3.5-5 3.7l-34.9 3.3c-5.2.5-7.3 7-3.4 10.5l26.3 23.1c1.7 1.5 2.4 3.7 1.9 5.9l-7.9 32.399c-1.2 5.101 4.3 9.3 8.9 6.601l29.1-17.101c1.9-1.1 4.2-1.1 6.1 0l29.101 17.101c4.6 2.699 10.1-1.4 8.899-6.601l-7.8-32.399c-.5-2.2.2-4.4 1.9-5.9l26.3-23.1c3.8-3.5 1.6-10-3.6-10.5z'/%3e%3c/svg%3e");
  }
`;

const RatingTitle = styled.div``;

const ReviewForm = (props) => {
  // Rating component
  const RatingOption = [5, 4, 3, 2, 1].map((score, index) => {
    return (
      <>
        <input
          type="radio"
          checked={props.review.score === score}
          value={score}
          name="rating"
          onChange={() => console.log("seleccion:", score)}
          id={`rating-${score}`}
        />
        <label onClick={props.setRating.bind(this, score)}></label>
      </>
    );
  });

  return (
    <div className="wrapper">
      <form onSubmit={props.handleSubmit}>
        <div>
          Que tal te parecio {props.attributes.name}? Te gusto? comparti tu
          critica
          <div className="field">
            <input
              onChange={props.handleChange}
              type="text"
              name="title"
              placeholder="Tu critica"
              value={props.review.title}
            />
          </div>
          <div className="field">
            <input
              onChange={props.handleChange}
              type="text"
              name="description"
              placeholder="Contanos mas"
              value={props.review.description}
            />
          </div>
          <div className="field">
            <RatingWrap>
              <div className="rating-title-text">Danos tu puntaje</div>
              <RatingBox>{RatingOption}</RatingBox>
            </RatingWrap>
          </div>
        </div>
        <button type="submit">Envia tu critica</button>
      </form>
    </div>
  );
};

export default ReviewForm;
