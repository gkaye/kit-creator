import {
  CheckOutlined,
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
} from "@ant-design/icons";
import { Button, Modal, Space, Typography } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import MeJpg from "../me.jpg";
import {
  navigationAboutVisibleSelector,
  navigateExitAboutAction,
} from "../state/navigationReducer";

const AboutModal = () => {
  const dispatch = useDispatch();
  const visible = useSelector(navigationAboutVisibleSelector);

  return (
    <Modal
      title="About"
      centered
      maskClosable
      visible={visible}
      onCancel={() => dispatch(navigateExitAboutAction())}
      onOk={() => dispatch(navigateExitAboutAction())}
      style={{ textAlign: "center" }}
      footer={
        <div style={{ textAlign: "center" }}>
          <Button
            key="submit"
            type="primary"
            shape="round"
            icon={<CheckOutlined />}
            onClick={() => dispatch(navigateExitAboutAction())}
          >
            Got it!
          </Button>
        </div>
      }
    >
      <Space direction="vertical" size={25}>
        <Avatar
          src={MeJpg}
          size={120}
          style={{
            border: "rgb(0, 0, 0, .2)",
            borderWidth: "thin",
            borderStyle: "solid",
          }}
        />
        <Space direction="vertical" size={10}>
          <Typography.Text
            strong
            style={{ fontStyle: "italic", color: "rgb(0, 0, 0, 0.8)" }}
          >
            Hey! I&apos;m Greg Kaye, founder of Keto Starter Kit. Feel free to
            reach out to me with comments or questions!
          </Typography.Text>

          <div style={{ textAlign: "center" }}>
            <Space size="small" align="center">
              <Button
                type="link"
                size="large"
                icon={<MailOutlined />}
                onClick={() => {
                  window.open("mailto:greg.james.kaye@gmail.com", "_blank");
                }}
              />
              <Button
                type="link"
                size="large"
                icon={<GithubOutlined />}
                onClick={() => {
                  window.open("https://github.com/gkaye", "_blank");
                }}
              />
              <Button
                type="link"
                size="large"
                icon={<LinkedinOutlined />}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/in/greg-kaye/",
                    "_blank",
                  );
                }}
              />
            </Space>
          </div>
        </Space>
      </Space>
    </Modal>
  );
};

export default AboutModal;
