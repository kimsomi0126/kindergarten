import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import ContentLayout from "../../layouts/common/ContentLayout";
import { NoticeImageData } from "../../components/common/TemporaryData";
const NoticeDetails = () => {
  return (
    <ContentLayout>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: 1080,
          background: "red",
        }}
      >
        <div style={{ width: 800, height: 800, background: "green" }}>
          <div style={{ maxWidth: "820px", marginTop: 80 }}>
            <ImageGallery items={NoticeImageData} />
          </div>
        </div>
      </div>
    </ContentLayout>
  );
};

export default NoticeDetails;
