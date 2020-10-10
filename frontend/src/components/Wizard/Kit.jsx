/* eslint-disable react/no-array-index-key */
/* eslint-disable react/destructuring-assignment */
import { Button, Col, Row, Space, Steps } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RightOutlined, FlagTwoTone } from "@ant-design/icons";
import { MdShoppingCart, MdKeyboardBackspace } from "react-icons/all";
import {
  navigateNextWizardAction,
  navigatePreviousWizardAction,
  navigateWizardAction,
  navigationCurrentWizardPageSelector,
} from "../../state/navigationReducer";
import { useParamSelector } from "../../state/reducerHelpers";
import { allPagesSelector, kitSelector } from "../../state/templateReducer";
import Page from "./Page";
import CartCheckoutSection from "../Cart/CartCheckoutSection";

const Kit = ({ kitId }) => {
  const { pages } = useParamSelector(kitSelector, kitId);
  const deepPages = useParamSelector(allPagesSelector, pages);

  const dispatch = useDispatch();
  const currentPage = useSelector(navigationCurrentWizardPageSelector);

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div
        style={{
          maxWidth: "1300px",
          minWidth: "400px",
          width: "1300px",
          padding: "0px 0px 50px 0px",
        }}
      >
        <Row justify="center" align="top">
          <Col
            span={24}
            style={{
              paddingTop: "25px",
              paddingBottom: "10px",
            }}
          >
            <Steps
              current={currentPage}
              size="small"
              onChange={(selectedPageId) =>
                dispatch(navigateWizardAction(selectedPageId))
              }
              style={{
                background: "#ffffff",
                padding: "10px 20px",
                borderRadius: "10px",
              }}
            >
              {deepPages.map((page, i) => (
                <Steps.Step
                  title={page.title}
                  icon={
                    currentPage === i ? (
                      <MdShoppingCart style={{ opacity: "75%" }} />
                    ) : currentPage > i ? (
                      <div style={{ lineHeight: "14.5px" }}>
                        <RightOutlined
                          style={{
                            opacity: "25%",
                            fontSize: "12px",
                            marginRight: "0px",
                            color: "black",
                          }}
                        />
                      </div>
                    ) : (
                      <div style={{ lineHeight: "14.5px" }}>
                        <RightOutlined
                          style={{
                            opacity: "50%",
                            fontSize: "12px",
                            marginRight: "0px",
                          }}
                        />
                      </div>
                    )
                  }
                  key={i}
                />
              ))}
              <Steps.Step
                title="Checkout"
                icon={
                  <FlagTwoTone
                    twoToneColor={
                      currentPage >= pages.length ? "#1890ff" : "#cccccc"
                    }
                    style={{ opacity: "75%" }}
                  />
                }
                key="checkout"
              />
            </Steps>
          </Col>
          {currentPage >= pages.length ? (
            <CartCheckoutSection />
          ) : (
            <>
              <Col span={24}>
                <Page pageId={pages[currentPage]} />
              </Col>
            </>
          )}
          <Col span={24} align="center">
            <Space size={2}>
              {currentPage <= pages.length - 1 && (
                <Button
                  className="back-button"
                  icon={
                    <MdKeyboardBackspace
                      style={{ fontSize: "14px", marginTop: "1px" }}
                    />
                  }
                  disabled={currentPage === 0}
                  onClick={() => dispatch(navigatePreviousWizardAction())}
                />
              )}
              {currentPage < pages.length - 1 && (
                <Button
                  className="continue-button"
                  onClick={() => dispatch(navigateNextWizardAction())}
                >
                  Continue
                </Button>
              )}
              {currentPage === pages.length - 1 && (
                <Button
                  className="continue-button"
                  onClick={() => dispatch(navigateNextWizardAction())}
                >
                  Checkout
                </Button>
              )}
            </Space>
          </Col>
        </Row>
      </div>
    </div>
  );
};

Kit.propTypes = {
  kitId: PropTypes.string.isRequired,
};

export default Kit;
