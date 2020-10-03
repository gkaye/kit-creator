import { Col, Row } from "antd";

import PropTypes from "prop-types";
import React from "react";

import "../../App.css";

import { useParamSelector } from "../../state/reducerHelpers";
import { pageSelector } from "../../state/templateReducer";
import Section from "./Section";

const Page = ({ pageId }) => {
  const { sections } = useParamSelector(pageSelector, pageId);
  console.log("GREG", pageId, sections);

  return (
    <>
      <Row>
        <Col span={24}>
          {sections.map((section) => (
            <Section sectionId={section} />
          ))}
        </Col>
      </Row>
    </>
  );
};

Page.propTypes = {
  pageId: PropTypes.string.isRequired,
};

export default Page;
