import React from "react";

const ImageComponent = ({ src, alt }) => {
  return (
    <img
      src={src}
      alt={alt || "image"}
      style={{ width: "100%", display: "block" }}
    />
  );
};

export default ImageComponent;
