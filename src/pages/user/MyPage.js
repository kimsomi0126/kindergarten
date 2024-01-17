import React, { useState } from "react";
import ContentLayout from "../../layouts/common/ContentLayout";
import { PageTitle } from "../../styles/basic";
import { Form, Input, Select } from "antd";
import Search from "antd/es/input/Search";
import {
  FlexBox,
  MypageWrap,
  PageTop,
  SearchWrap,
  TableWrap,
} from "../../styles/user/mypage";
import {
  BtnWrap,
  GrayBtn,
  GreenBtn,
  OrangeBtn,
  PinkBtn,
} from "../../styles/ui/buttons";

const MyPage = () => {
  const [componentSize, setComponentSize] = useState("default");
  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
    console.log(componentSize);
  };
  const onSearch = (value, _e, info) => console.log(info?.source, value);
  return (
    <ContentLayout>
      <MypageWrap>
        <PageTop>
          <PageTitle>마이페이지</PageTitle>
          <FlexBox>
            {/*  */}
            <Form onValuesChange={onFormLayoutChange} layout="inline">
              <Form.Item>
                <Select defaultValue="2024">
                  <Select.Option value="2024">2024년</Select.Option>
                  <Select.Option value="2023">2023년</Select.Option>
                  <Select.Option value="2022">2022년</Select.Option>
                  <Select.Option value="2021">2021년</Select.Option>
                  <Select.Option value="2020">2020년</Select.Option>
                  <Select.Option value="2019">2019년</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item>
                <Select label="Select" defaultValue="1">
                  <Select.Option value="1">신짱구</Select.Option>
                  <Select.Option value="2">신짱아</Select.Option>
                </Select>
              </Form.Item>
            </Form>
            <BtnWrap>
              <GrayBtn>아이추가</GrayBtn>
              <GrayBtn>알림장</GrayBtn>
              <GreenBtn>학부모정보수정</GreenBtn>
              <PinkBtn>회원탈퇴</PinkBtn>
            </BtnWrap>
          </FlexBox>
        </PageTop>
        <div className="MyContentWrap">
          <div className="ProfileWrap">
            <div className="ProfileImg">
              <img
                src={process.env.PUBLIC_URL + "/images/user/my_img01.jpg"}
                alt=""
              />
            </div>
            <div className="ProfileInfo">
              <div className="MyClass">
                <p className="ClassName">해바라기반</p>
                <div className="IdentCode">
                  <dl>
                    <dt>식별코드</dt>
                    <dd>00000</dd>
                  </dl>
                  <OrangeBtn>식별코드수정</OrangeBtn>
                </div>
              </div>
              <div className="MyInfo">
                <dl>
                  <dt>이름</dt>
                  <dd>홍길동</dd>
                </dl>
                <dl>
                  <dt>성별</dt>
                  <dd>남자</dd>
                </dl>
                <dl>
                  <dt>생년월일</dt>
                  <dd>2019-05-05</dd>
                </dl>
                <dl>
                  <dt>주소</dt>
                  <dd>서울특별시 어쩌구 저쩌동</dd>
                </dl>
                <dl>
                  <dt>비상연락처</dt>
                  <dd>홍길동 01000000000</dd>
                </dl>
              </div>
            </div>
            <div className="AdminMemo">
              <dl>
                <dt>관리자메모</dt>
                <dd>관리자가 입력한 메모 내용 출력</dd>
              </dl>
            </div>
          </div>
          <div className="AccountInfo">
            <TableWrap className="TableWrap">
              <table>
                <colgroup>
                  <col width="20%" />
                  <col width="20%" />
                  <col width="20%" />
                  <col width="20%" />
                  <col width="20%" />
                </colgroup>
                <thead>
                  <tr>
                    <th>아이디 </th>
                    <th>이름</th>
                    <th>연락처</th>
                    <th>관계</th>
                    <th>관리</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>bong11</td>
                    <td>봉미선</td>
                    <td>01000000000</td>
                    <td>부</td>
                    <td>
                      <GrayBtn>연결삭제</GrayBtn>
                    </td>
                  </tr>
                  <tr>
                    <td>bong11</td>
                    <td>봉미선</td>
                    <td>01000000000</td>
                    <td>부</td>
                    <td>
                      <GrayBtn>연결삭제</GrayBtn>
                    </td>
                  </tr>
                </tbody>
              </table>
            </TableWrap>
          </div>
          <div className="DetailInfo"></div>
        </div>
      </MypageWrap>
    </ContentLayout>
  );
};

export default MyPage;
