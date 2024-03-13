import { Modal } from "antd";
import React, { useEffect } from "react";
import { OrangeBtn, PinkBtn } from "../../styles/ui/buttons";
import { ModalBody, ModalTitle } from "../../styles/ui/warning";

const ModalOneBtn = ({ isOpen, handleOk, title, subTitle, children }) => {
  const handleKeyPress = event => {
    if (
      event.key === "Enter" ||
      event.key === "Escape" ||
      event.key === "Esc"
    ) {
      event.preventDefault();
      handleOk(event); // 키를 누르면 확인 동작 실행
    }
  };

  const handleKeyUp = event => {
    if (isOpen) {
      handleKeyPress(event);
    }
  };

  const modalStyles = {
    footer: {
      display: "flex",
      justifyContent: "center",
      gap: "2rem",
    },
    body: {
      paddingTop: "2rem",
    },
  };
  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      closeIcon={null}
      width={400}
      footer={[
        <PinkBtn key="submit" type="primary" onClick={handleOk}>
          확인
        </PinkBtn>,
      ]}
      styles={modalStyles}
      onKeyUp={handleKeyUp}
    >
      <ModalTitle>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </ModalTitle>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

export default ModalOneBtn;
