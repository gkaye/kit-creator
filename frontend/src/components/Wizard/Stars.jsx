import React from "react";
import PropTypes from "prop-types";
import { Space } from "antd";
import { BsStar, BsStarFill, BsStarHalf } from "react-icons/all";

const starStyle = {
  fontSize: "14px",
  color: "#F7CA00",
  top: "2px",
  position: "relative",
};
const Stars = ({ rating, maxRating }) => {
  const ratings = [];
  let ratingTtl = rating;
  for (let i = 0; i < maxRating; i += 1) {
    if (ratingTtl >= 1) ratings.push(<BsStarFill key={i} style={starStyle} />);
    else if (ratingTtl <= 0) ratings.push(<BsStar key={i} style={starStyle} />);
    else ratings.push(<BsStarHalf key={i} style={starStyle} />);
    ratingTtl -= 1;
  }
  return (
    <Space size={3} style={{ textAlign: "right" }}>
      {ratings.map((star) => star)}
    </Space>
  );
};

Stars.propTypes = {
  rating: PropTypes.number.isRequired,
  maxRating: PropTypes.number,
};

Stars.defaultProps = {
  maxRating: 5,
};

export default Stars;
