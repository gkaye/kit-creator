import React from "react";
import PropTypes from "prop-types";
import { Typography } from "antd";
import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";

const bulletStyle = {
  fontSize: "11px",
  marginTop: "2.5px",
  marginRight: "6px",
};

const getSentimentIcon = (sentiment) => {
  switch (sentiment) {
    case "good":
      return (
        <CheckCircleOutlined style={{ color: "limegreen", ...bulletStyle }} />
      );
    case "bad":
      return (
        <CloseCircleOutlined style={{ color: "orangered", ...bulletStyle }} />
      );
    default:
      return <InfoCircleOutlined style={{ color: "gray", ...bulletStyle }} />;
  }
};

const Descriptions = ({ descriptions }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
      }}
    >
      {descriptions.map(({ sentiment, text }) => (
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            lineHeight: "1.2",
          }}
          key={`${sentiment} ${text}`}
        >
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
            }}
          >
            {getSentimentIcon(sentiment)}
          </div>
          <div>
            <Typography.Paragraph
              style={{
                fontSize: "12px",
                textAlign: "left",
                marginBottom: "5px",
              }}
            >
              {text}
            </Typography.Paragraph>
          </div>
        </div>
      ))}
    </div>
  );
};

Descriptions.propTypes = {
  descriptions: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      sentiment: PropTypes.string.isRequired,
    })
  ).isRequired,
};

Descriptions.defaultProps = {};

export default Descriptions;
