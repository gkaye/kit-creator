import React from "react";
import PropTypes from "prop-types";
import { Space, Typography } from "antd";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/all";

const starStyle = {
  fontSize: "14px",
  color: "#F7CA00",
  top: "2px",
  position: "relative",
};
const Rating = ({ title, rating, maxRating }) => {
  const ratings = [];
  let ratingTtl = rating;
  for (let i = 0; i < maxRating; i += 1) {
    if (ratingTtl >= 1) ratings.push(<BsStarFill style={starStyle} />);
    else if (ratingTtl <= 0) ratings.push(<BsStar style={starStyle} />);
    else ratings.push(<BsStarHalf style={starStyle} />);
    ratingTtl -= 1;
  }
  return (
    <div>
      <Typography.Text
        strong
        style={{ fontSize: "13px", marginRight: "5px", textAlign: "left" }}
      >
        {title}
      </Typography.Text>
      <Space size={3} style={{ textAlign: "right" }}>
        {ratings.map((star) => star)}
      </Space>
    </div>
  );
};

Rating.propTypes = {
  title: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
};

Rating.defaultProps = {
  maxRating: 5,
};

export default Rating;
