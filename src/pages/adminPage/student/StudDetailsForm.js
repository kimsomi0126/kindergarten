import React, { useState } from "react";
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

const StudDetailsForm = () => {
  return (
    <>
      {/* 상세정보 */}
      <StudDetailWrap>
        <TitleWrap>
          <PageTitle>2024년 상세정보 입력</PageTitle>
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
                <td>해바라기반</td>
                <td>신짱구</td>
                <td>남</td>
                <td>2019-05-05</td>
              </tr>
            </tbody>
          </table>
        </DetailFormTable>
      </StudDetailWrap>
      {/* 신체정보 */}
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
                    <Form.Item>
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                        placeholder="측정날짜입력"
                      />
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item>
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                        placeholder="측정날짜입력"
                      />
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item>
                      <DatePicker
                        style={{
                          width: "100%",
                        }}
                        placeholder="측정날짜입력"
                      />
                    </Form.Item>
                  </td>
                  <td>
                    <Form.Item>
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
                    <Form>
                      <Form.Item
                        name="height"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력하세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="신장 입력 (숫자만)" />
                      </Form.Item>
                    </Form>
                  </td>
                  <td>
                    <Form>
                      <Form.Item
                        name="height"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력하세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="신장 입력 (숫자만)" />
                      </Form.Item>
                    </Form>
                  </td>
                  <td>
                    <Form>
                      <Form.Item
                        name="height"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력하세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="신장 입력 (숫자만)" />
                      </Form.Item>
                    </Form>
                  </td>
                  <td>
                    <Form>
                      <Form.Item
                        name="height"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력하세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="신장 입력 (숫자만)" />
                      </Form.Item>
                    </Form>
                  </td>
                </tr>
                <tr>
                  <th>몸무게</th>
                  <td>
                    <Form>
                      <Form.Item
                        name="weight"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력해주세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="몸무게 입력 (숫자만)" />
                      </Form.Item>
                    </Form>
                  </td>
                  <td>
                    <Form>
                      <Form.Item
                        name="weight"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력해주세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="몸무게 입력 (숫자만)" />
                      </Form.Item>
                    </Form>
                  </td>
                  <td>
                    <Form>
                      <Form.Item
                        name="weight"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력해주세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="몸무게 입력 (숫자만)" />
                      </Form.Item>
                    </Form>
                  </td>
                  <td>
                    <Form>
                      <Form.Item
                        name="weight"
                        rules={[
                          {
                            pattern: /^\d*$/,
                            message: "숫자만 입력해주세요.",
                          },
                        ]}
                      >
                        <Input type="text" placeholder="몸무게 입력 (숫자만)" />
                      </Form.Item>
                    </Form>
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
                  <Form.Item>
                    <DatePicker
                      style={{
                        width: "100%",
                      }}
                      placeholder="날짜입력"
                    />
                  </Form.Item>
                </td>
                <td>
                  <Form.Item>
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
                  <Form.Item>
                    <Input
                      type="text"
                      placeholder="선택한 키워드와 관련된 내용"
                    />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Item>
                    <DatePicker
                      style={{
                        width: "100%",
                      }}
                      placeholder="날짜입력"
                    />
                  </Form.Item>
                </td>
                <td>
                  <Form.Item>
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
                  <Form.Item>
                    <Input
                      type="text"
                      placeholder="선택한 키워드와 관련된 내용"
                    />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Item>
                    <DatePicker
                      style={{
                        width: "100%",
                      }}
                      placeholder="날짜입력"
                    />
                  </Form.Item>
                </td>
                <td>
                  <Form.Item>
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
                  <Form.Item>
                    <Input
                      type="text"
                      placeholder="선택한 키워드와 관련된 내용"
                    />
                  </Form.Item>
                </td>
              </tr>
              <tr>
                <td>
                  <Form.Item>
                    <DatePicker
                      style={{
                        width: "100%",
                      }}
                      placeholder="날짜입력"
                    />
                  </Form.Item>
                </td>
                <td>
                  <Form.Item>
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
                  <Form.Item>
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
        <GreenBtn>등록</GreenBtn>
        <PinkBtn>취소</PinkBtn>
      </StudDetailsFormFooter>
    </>
  );
};

export default StudDetailsForm;
