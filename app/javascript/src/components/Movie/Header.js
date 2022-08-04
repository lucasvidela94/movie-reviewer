const Header = (props) => {
  const { name, image_url, avg_score } = props.attributes;
  const total = props.reviews.lenght;
  return (
    <div className="wrapper">
      <div>
        <h1>
          <img src={image_url} />
          {name}
        </h1>
        <div className="totalReviews">{total} criticas</div>
        <div className="totalRating"></div>
        <div className="totalOutOf">{avg_score} out of 5</div>
      </div>
    </div>
  );
};

export default Header;
