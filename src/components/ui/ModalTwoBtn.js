import { Modal } from "antd";
import React, { useEffect } from "react";
import { OrangeBtn, PinkBtn } from "../../styles/ui/buttons";
import { ModalBody, ModalTitle } from "../../styles/ui/warning";

const ModalTwoBtn = ({
  isOpen,
  handleOk,
  handleCancel,
  title,
  subTitle,
  children,
}) => {
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

  // 키보드 이벤트 리스너 추가
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.key === "Enter") {
        handleOk(); // Enter 키를 누르면 확인 액션 실행
      } else if (event.key === "Escape") {
        handleCancel(); // Escape 키를 누르면 취소 액션 실행
      }
    };

    if (isOpen) {
      // 모달이 열려 있을 때만 이벤트 리스너를 추가
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown); // 컴포넌트가 언마운트되거나 모달이 닫힐 때 이벤트 리스너 제거
    };
  }, [isOpen, handleOk, handleCancel]); // 의존성 배열에 isOpen, handleOk, handleCancel 추가

  return (
    <Modal
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      closeIcon={null}
      width={400}
      footer={[
        <PinkBtn key="submit" type="primary" onClick={handleOk}>
          확인
        </PinkBtn>,
        <OrangeBtn key="back" onClick={handleCancel}>
          취소
        </OrangeBtn>,
      ]}
      styles={modalStyles}
    >
      <ModalTitle>
        <h3>{title}</h3>
        <p>{subTitle}</p>
      </ModalTitle>
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};

export default ModalTwoBtn;
