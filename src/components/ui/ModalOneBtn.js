import { Modal } from "antd";
import React, { useEffect } from "react";
import { OrangeBtn, PinkBtn } from "../../styles/ui/buttons";
import { ModalBody, ModalTitle } from "../../styles/ui/warning";

const ModalOneBtn = ({ isOpen, handleOk, title, subTitle, children }) => {
  useEffect(() => {
    const handleKeyPress = event => {
      if (isOpen) {
        if (event.key === "Enter") {
          event.preventDefault();
          handleOk(event); // 키를 누르면 확인 동작 실행
        }
        if (event.key === "Escape") {
          event.preventDefault();
          handleOk(event); // 키를 누르면 확인 동작 실행
        }
        if (event.key === "Esc") {
          event.preventDefault();
          handleOk(event); // 키를 누르면 확인 동작 실행
        }
      }
    };

    // isOpen 상태일 때만 키보드 이벤트 리스너를 추가합니다.
    if (isOpen) {
      window.addEventListener("keydown", handleKeyPress);
    }

    // 컴포넌트 언마운트 혹은 isOpen 변경 시 이벤트 리스너를 제거합니다.

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [isOpen, handleOk]); // 의존성 배열에 isOpen과 handleOk를 추가하여 이 값들이 변경될 때만 이펙트를 다시 실행합니다.

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
