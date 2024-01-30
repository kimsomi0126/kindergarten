import React, { useEffect, useState } from "react";
import { PageTitle } from "../../../styles/basic";
import { DetailPhysical, TitleWrap } from "../../../styles/user/mypage";
import { DatePicker, Form, Input, Select } from "antd";
import {
  DetailFormTable,
  DetailPhysicalTable,
  KeywordTable,
  StudDetailWrap,
  StudDetailsFormFooter,
} from "../../../styles/adminstyle/studdetailsform";
import { GreenBtn, PinkBtn } from "../../../styles/ui/buttons";
import ModalTwoBtn from "../../../components/ui/ModalTwoBtn";
import ModalOneBtn from "../../../components/ui/ModalOneBtn";
import { useNavigate, useSearchParams } from "react-router-dom";
import {
  getDetailInfo,
  postStudentDetail,
} from "../../../api/adminPage/admin_api";

const initDetailData = {
  ikid: 0,
  height: 0,
  weight: 0,
  growth: 0,
  growthDate: "",
  growthMemo: "",
  bodyDate: "",
};

const initDetailInfo = {
  kidNm: "",
  iclass: 0,
  gender: 0,
  birth: "",
  growths: [
    {
      height: 0,
      weight: 0,
      bodyDate: "",
      growth: 0,
      growthDate: "",
      growthMemo: "",
    },
  ],
};

const StudDetailsForm = ({ handleOk }) => {
  const navigate = useNavigate();
  // 상세 정보 Get
  const [detailInfo, setDetailInfo] = useState(initDetailInfo);
  const [serchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    getDetailInfo({ successFn, failFn, errorFn, ikid, year });
  }, []);
  const ikid = serchParams.get("ikid");
  const year = serchParams.get("year");
  const successFn = result => {
    setDetailInfo(result);
  };
  const failFn = result => {
    setDetailInfo(result);
  };
  const errorFn = result => {
    setDetailInfo(result);
  };

  // 상세 정보 Post
  const [allDetailData, setAllDetailData] = useState(initDetailData);
  const firstObject = {};
  for (const key in allDetailData) {
    if (key.includes("1")) {
      const newKey = key.replace("1", "");
      firstObject[newKey] = allDetailData[key];
    }
  }
  const secondObject = {};
  for (const key in allDetailData) {
    if (key.includes("2")) {
      const newKey = key.replace("2", "");
      secondObject[newKey] = allDetailData[key];
    }
  }
  const thirdObject = {};
  for (const key in allDetailData) {
    if (key.includes("3")) {
      const newKey = key.replace("3", "");
      thirdObject[newKey] = allDetailData[key];
    }
  }
  const forthObject = {};
  for (const key in allDetailData) {
    if (key.includes("4")) {
      const newKey = key.replace("4", "");
      forthObject[newKey] = allDetailData[key];
    }
  }
  const onValuesChange = (changeValue, allValue) => {
    setAllDetailData({ ...allValue });
  };
  console.log("1번", firstObject);
  console.log("2번", secondObject);
  console.log("3번", thirdObject);
  console.log("4번", forthObject);

  const handleAddClick = () => {
    postStudentDetail({
      allDetailData,
      successAddFn,
      failAddFn,
      errorAddFn,
    });
    console.log(postStudentDetail);
  };
  const successAddFn = result => {
    console.log(result);
  };
  const failAddFn = result => {
    console.log(result);
  };
  const errorAddFn = result => {
    console.log(result);
  };

  // 모달창 적용
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const handleCancelClick = () => {
    setIsCancelModalOpen(true);
  };
  const onAdd = () => {
    navigate(`/admin/student/details`);
    return;
  };
  const onCancel = () => {
    setIsCancelModalOpen(false);
  };

  return (
    <>
      {/* 상세정보 */}
      <StudDetailWrap>
        <TitleWrap>
          <PageTitle>{detailInfo.year}년 상세정보 입력</PageTitle>
        </TitleWrap>
        <DetailFormTable className="TableWrap">
          <table>
            <colgroup>
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
              <col width="25%" />
            </colgroup>
            <thead>
              <tr>
                <th>반</th>
                <th>이름</th>
                <th>성별</th>
                <th>생년월일</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{detailInfo.iclass}</td>
                <td>{detailInfo.kidNm}</td>
                <td>{detailInfo.gender}</td>
                <td>{detailInfo.birth}</td>
              </tr>
            </tbody>
          </table>
        </DetailFormTable>
      </StudDetailWrap>
      {/* 신체정보 */}
      <Form
        onValuesChange={(changeValue, allValue) => {
          onValuesChange(changeValue, allValue);
        }}
      >
        <StudDetailWrap>
          <TitleWrap>
            <PageTitle>키/몸무게</PageTitle>
          </TitleWrap>
          <DetailPhysical>
            <DetailPhysicalTable className="th_left">
              <table>
                <colgroup>
                  <col width="20%" />
                  <col width="20%" />
                  <col width="20%" />
                  <col width="20%" />
                  <col width="20%" />
                </colgroup>
                <tbody>
                  <tr>
                    <th>측정날짜</th>
                    <td>
                      <Form.Item name="bodyDate1">
                        <DatePicker
                          style={{
                            width: "100%",
                          }}
                          placeholder="측정날짜입력"
                        />
                      </Form.Item>
                    </td>
                    <td>
                      <Form.Item name="bodyDate2">
                        <DatePicker
                          style={{
                            width: "100%",
                          }}
                          placeholder="측정날짜입력"
                        />
                      </Form.Item>
                    </td>
                    <td>
                      <Form.Item name="bodyDate3">
                        <DatePicker
                          style={{
                            width: "100%",
                          }}
                          placeholder="측정날짜입력"
                        />
                      </Form.Item>
                    </td>
                    <td>
                      <Form.Item name="bodyDate4">
                        <DatePicker
                          style={{
                            width: "100%",
                          }}
                          placeholder="측정날짜입력"
                        />
                      </Form.Item>
                    </td>
                  </tr>
                  <tr>
                    <th>신장</th>
                    <td>
                      <Form.Item
                        name="height1"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력하세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="신장 입력 (숫자만)" />
                      </Form.Item>
                    </td>
                    <td>
                      <Form.Item
                        name="height2"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력하세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="신장 입력 (숫자만)" />
                      </Form.Item>
                    </td>
                    <td>
                      <Form.Item
                        name="height3"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력하세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="신장 입력 (숫자만)" />
                      </Form.Item>
                    </td>
                    <td>
                      <Form.Item
                        name="height4"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력하세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="신장 입력 (숫자만)" />
                      </Form.Item>
                    </td>
                  </tr>
                  <tr>
                    <th>몸무게</th>
                    <td>
                      <Form.Item
                        name="weight1"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력해주세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="몸무게 입력 (숫자만)" />
                      </Form.Item>
                    </td>
                    <td>
                      <Form.Item
                        name="weight2"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력해주세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="몸무게 입력 (숫자만)" />
                      </Form.Item>
                    </td>
                    <td>
                      <Form.Item
                        name="weight3"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력해주세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="몸무게 입력 (숫자만)" />
                      </Form.Item>
                    </td>
                    <td>
                      <Form.Item
                        name="weight4"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력해주세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="몸무게 입력 (숫자만)" />
                      </Form.Item>
                    </td>
                  </tr>
                </tbody>
              </table>
            </DetailPhysicalTable>
          </DetailPhysical>
        </StudDetailWrap>
        {/* 키워드 */}
        <StudDetailWrap>
          <TitleWrap>
            <PageTitle>키워드</PageTitle>
          </TitleWrap>
          <KeywordTable className="TableWrap">
            <table>
              <colgroup>
                <col width="25%" />
                <col width="25%" />
                <col width="50%" />
              </colgroup>
              <thead>
                <tr>
                  <th>날짜</th>
                  <th>키워드</th>
                  <th>상세내용</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form.Item name="growthDate1">
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                        placeholder="날짜입력"
                      />
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item name="growth1">
                      <Select
                        labelInValue
                        defaultValue={{
                          value: "",
                          label: (
                            <span style={{ color: " rgba(0, 0, 0, 0.25) " }}>
                              키워드 선택
                            </span>
                          ),
                        }}
                      >
                        <Select.Option value="1">활발한</Select.Option>
                        <Select.Option value="2">예의바른</Select.Option>
                        <Select.Option value="3">창의적인</Select.Option>
                        <Select.Option value="4">호기심 많은</Select.Option>
                        <Select.Option value="5">착한</Select.Option>
                        <Select.Option value="6">씩씩한</Select.Option>
                        <Select.Option value="7">성실한</Select.Option>
                        <Select.Option value="8">편식 없는</Select.Option>
                        <Select.Option value="9">깔끔한</Select.Option>
                        <Select.Option value="10">튼튼한</Select.Option>
                      </Select>
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item name="growthMemo1">
                      <Input
                        type="text"
                        placeholder="선택한 키워드와 관련된 내용"
                      />
                    </Form.Item>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Item name="growthDate2">
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                        placeholder="날짜입력"
                      />
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item name="growth2">
                      <Select
                        labelInValue
                        defaultValue={{
                          value: "",
                          label: (
                            <span style={{ color: " rgba(0, 0, 0, 0.25) " }}>
                              키워드 선택
                            </span>
                          ),
                        }}
                      >
                        <Select.Option value="1">활발한</Select.Option>
                        <Select.Option value="2">예의바른</Select.Option>
                        <Select.Option value="3">창의적인</Select.Option>
                        <Select.Option value="4">호기심 많은</Select.Option>
                        <Select.Option value="5">착한</Select.Option>
                        <Select.Option value="6">씩씩한</Select.Option>
                        <Select.Option value="7">성실한</Select.Option>
                        <Select.Option value="8">편식 없는</Select.Option>
                        <Select.Option value="9">깔끔한</Select.Option>
                        <Select.Option value="10">튼튼한</Select.Option>
                      </Select>
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item name="growthMemo2">
                      <Input
                        type="text"
                        placeholder="선택한 키워드와 관련된 내용"
                      />
                    </Form.Item>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Item name="growthDate3">
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                        placeholder="날짜입력"
                      />
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item name="growth3">
                      <Select
                        labelInValue
                        defaultValue={{
                          value: "",
                          label: (
                            <span style={{ color: " rgba(0, 0, 0, 0.25) " }}>
                              키워드 선택
                            </span>
                          ),
                        }}
                      >
                        <Select.Option value="1">활발한</Select.Option>
                        <Select.Option value="2">예의바른</Select.Option>
                        <Select.Option value="3">창의적인</Select.Option>
                        <Select.Option value="4">호기심 많은</Select.Option>
                        <Select.Option value="5">착한</Select.Option>
                        <Select.Option value="6">씩씩한</Select.Option>
                        <Select.Option value="7">성실한</Select.Option>
                        <Select.Option value="8">편식 없는</Select.Option>
                        <Select.Option value="9">깔끔한</Select.Option>
                        <Select.Option value="10">튼튼한</Select.Option>
                      </Select>
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item name="growthMemo3">
                      <Input
                        type="text"
                        placeholder="선택한 키워드와 관련된 내용"
                      />
                    </Form.Item>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form.Item name="growthDate4">
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                        placeholder="날짜입력"
                      />
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item name="growth4">
                      <Select
                        labelInValue
                        defaultValue={{
                          value: "",
                          label: (
                            <span style={{ color: " rgba(0, 0, 0, 0.25) " }}>
                              키워드 선택
                            </span>
                          ),
                        }}
                      >
                        <Select.Option value="1">활발한</Select.Option>
                        <Select.Option value="2">예의바른</Select.Option>
                        <Select.Option value="3">창의적인</Select.Option>
                        <Select.Option value="4">호기심 많은</Select.Option>
                        <Select.Option value="5">착한</Select.Option>
                        <Select.Option value="6">씩씩한</Select.Option>
                        <Select.Option value="7">성실한</Select.Option>
                        <Select.Option value="8">편식 없는</Select.Option>
                        <Select.Option value="9">깔끔한</Select.Option>
                        <Select.Option value="10">튼튼한</Select.Option>
                      </Select>
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item name="growthMemo4">
                      <Input
                        type="text"
                        placeholder="선택한 키워드와 관련된 내용"
                      />
                    </Form.Item>
                  </td>
                </tr>
              </tbody>
            </table>
          </KeywordTable>
        </StudDetailWrap>
        <StudDetailsFormFooter>
          <GreenBtn onClick={handleAddClick}>등록</GreenBtn>
          {isAddModalOpen && (
            <ModalOneBtn
              isOpen={isAddModalOpen}
              handleOk={onAdd}
              title="등록 완료"
              subTitle="성공적으로 등록되었습니다."
            />
          )}

          <PinkBtn onClick={handleCancelClick}>취소</PinkBtn>
          {isCancelModalOpen && (
            <ModalTwoBtn
              isOpen={isCancelModalOpen}
              handleOk={handleOk}
              handleCancel={onCancel}
              title="정말 취소할까요?"
              subTitle="작성된 내용은 저장되지 않습니다."
            />
          )}
        </StudDetailsFormFooter>
      </Form>
    </>
  );
};

export default StudDetailsForm;
