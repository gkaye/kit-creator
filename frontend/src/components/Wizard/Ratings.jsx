import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";
import Stars from "./Stars";

const Ratings = ({ ratings, maxRating }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "flex-start",
      }}
    >
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
          marginRight: "10px",
        }}
      >
        {ratings.map((rating) => (
          <div key={rating.title}>
            <Typography.Text
              strong
              style={{
                fontSize: "13px",
                marginRight: "5px",
                textAlign: "left",
              }}
            >
              {rating.title}
            </Typography.Text>
          </div>
        ))}
      </div>
      <div
        style={{
          display: "inline-flex",
          flexDirection: "column",
          justifyContent: "space-around",
          alignItems: "flex-start",
        }}
      >
        {ratings.map((rating) => (
          <Stars
            key={`${rating.title} rating`}
            rating={rating.rating}
            maxRating={maxRating}
          />
        ))}
      </div>
    </div>
  );
};

Ratings.propTypes = {
  ratings: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ).isRequired,
  maxRating: PropTypes.number,
};

Ratings.defaultProps = {
  maxRating: 5,
};

export default Ratings;
