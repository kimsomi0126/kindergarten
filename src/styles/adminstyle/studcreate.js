import styled from "@emotion/styled";
import { colors } from "../basic";

export const StudFormWrap = styled.div`
  margin-top: 1rem;
  padding: 2rem;
  border-top: 2px solid ${colors.greenDeep};
  border-bottom: 2px solid ${colors.greenDeep};
  background-color: #fafafa;
  .ant-form-item {
    margin-bottom: 1.5rem;
  }
`;

export const BasicInfo = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${colors.greenDeep};
  }
`;

export const BasicInfoForm = styled.div`
  margin-top: 1rem;
  gap: 1rem;
`;

export const BasicInfoItem = styled.div`
  width: 100%;
  display: flex;
  gap: 1rem;
`;
export const BasicInfoCode = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  .ant-modal {
    background-color: #ffff00;
  }
  .ant-modal-content {
    background-color: #ffff00;
  }
`;
export const BasicInfoAdress = styled.div`
  display: flex;
  gap: 1rem;
`;
export const ClassInfo = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${colors.greenDeep};
  }
`;

export const ClassInfoForm = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

export const ImgInfo = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${colors.greenDeep};
  }
`;

export const ImgInfoForm = styled.div`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const PhoneInfo = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${colors.greenDeep};
  }
`;

export const PhoneInfoForm = styled.div`
  margin-top: 1rem;
  display: flex;
  gap: 1rem;
`;

export const AdminMemo = styled.div`
  p {
    font-size: 1.6rem;
    font-weight: 500;
    color: ${colors.greenDeep};
  }
`;

export const AdminMemoForm = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
`;

export const BottomBt = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;
