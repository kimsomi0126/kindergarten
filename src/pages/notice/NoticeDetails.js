import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { NoticeImageData } from "../../components/common/TemporaryData";
import { PageTitle } from "../../styles/basic";
import { Button } from "antd";

const size = "small";
const NoticeDetails = () => {
  return (
    <>
      <PageTitle>유치원 소식</PageTitle>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <div
          style={{
            borderTop: "1.5px solid #00876D", // 맨 위에 초록색 선
            borderBottom: "1.5px solid #00876D", // 맨 아래에 초록색 선
            width: "100%",
            textAlign: "center", // 제목을 가운데 정렬
            paddingTop: 20,
            justifyContent: "center", // 가로 정렬을 조절합니다.
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div style={{ margin: "auto" }}>
              <p style={{ margin: 0, fontSize: 27 }}>제목입니다.</p>
            </div>
            <p style={{ marginRight: 20, fontSize: 15, color: "#999" }}>
              2024-01-17
            </p>
          </div>
          <div
            style={{
              borderTop: "1.5px solid #DDDDDD",
              width: "100%",
              textAlign: "center", // 가운데 정렬
              marginTop: 20,
            }}
          >
            <div style={{ margin: 40, maxWidth: 500, display: "inline-block" }}>
              <ImageGallery items={NoticeImageData} thumbnailPosition="left" />
            </div>
          </div>
          <p style={{ margin: 30, textAlign: "center", fontSize: 20 }}>
            내용입니다
          </p>
        </div>
        <div
          style={{
            width: "100%", // 부모 요소에 너비를 주어야 오른쪽 정렬이 잘 됩니다.
            display: "flex",
            justifyContent: "flex-end", // 버튼들을 오른쪽으로 정렬
            marginTop: 20,
          }}
        >
          <Button
            type="primary"
            size={size}
            style={{
              background: "#D3ECC8",
              borderColor: "#D3ECC8",
              padding: "15px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              color: "#00876D",
              marginRight: 10,
            }}
          >
            목록보기
          </Button>
          <Button
            type="primary"
            size={size}
            style={{
              background: "#A2D8FF",
              borderColor: "#A2D8FF",
              padding: "15px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              color: "#00876D",
              marginRight: 10,
            }}
          >
            수정
          </Button>
          <Button
            type="primary"
            size={size}
            style={{
              background: "#FDC1C5",
              borderColor: "#FDC1C5",
              padding: "15px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "1rem",
              color: "#00876D",
            }}
          >
            삭제
          </Button>
        </div>
      </div>
    </>
  );
};

export default NoticeDetails;
