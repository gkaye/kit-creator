import Typography from "antd/es/typography";
import React from "react";
import PropTypes from "prop-types";

const Price = ({ price, fontSize }) => {
  const smallFontSize = Math.ceil(fontSize * 0.57);

  const displayPriceString = price.toFixed(2).toString().split(".");
  const displayPriceDollarsString = displayPriceString[0];
  const displayPriceCentsString = displayPriceString[1];

  return (
    <div>
      <Typography.Text
        style={{
          fontSize: smallFontSize,
          position: "relative",
          top: "-.5em",
        }}
      >
        $
      </Typography.Text>
      <Typography.Text strong style={{ fontSize }}>
        {displayPriceDollarsString}
      </Typography.Text>
      <Typography.Text
        style={{
          fontSize: smallFontSize,
          position: "relative",
          left: "2px",
          top: "-.5em",
        }}
      >
        {displayPriceCentsString}
      </Typography.Text>
    </div>
  );
};

Price.propTypes = {
  price: PropTypes.number.isRequired,
  fontSize: PropTypes.number,
};

Price.defaultProps = {
  fontSize: 21,
};

export default Price;
