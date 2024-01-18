import React from "react";
import ContentLayout from "../../layouts/common/ContentLayout";
import { UploadOutlined } from "@ant-design/icons";
import { Button, Upload } from "antd";

const fileList = [
  {
    uid: "0",
    name: "xxx.png",
    status: "uploading",
    percent: 33,
  },
  {
    uid: "-1",
    name: "yyy.png",
    status: "done",
    url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    thumbUrl:
      "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
  },
  {
    uid: "-2",
    name: "zzz.png",
    status: "error",
  },
];
const App = () => (
  <>
    <Upload
      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
      listType="picture"
      defaultFileList={[...fileList]}
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
    <br />
    <br />
    <Upload
      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
      listType="picture"
      defaultFileList={[...fileList]}
      className="upload-list-inline"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </Upload>
  </>
);
const NoticeModify = () => {
  return (
    <ContentLayout>
      <h1>공지 수정 페이지</h1>
    </ContentLayout>
  );
};

export default NoticeModify;
