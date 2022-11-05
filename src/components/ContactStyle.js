import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 32px;
  gap: 64px;

  width: 80%;
  height: 500px;
`;
export const HeadingStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 20px;

  width: 100%;
  /* height: 94px; */
  .heading {
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
  }
  .SupportingText {
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #475467;
  }
`;
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;

  width: 100%;
`;
export const NameStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;

  width: 100%;
  /* height: 70px; */
  .firstname,
  .lastname {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    gap: 6px;
  }
`;
export const EmailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;

  width: 100%;
  /* height: 70px; */
  .email {
    
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
    color: #344054;
  }
`;
export const MessageStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;

  width: 100%;
  /* height: 158px; */
  .message {
    font-family: "Inter";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;

    color: #344054;
  }
`;
export const CheckBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 100%;
  /* height: 24px; */
  .checkbox {
    width: 688px;
    height: 24px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #475467;
  }
`;
export const ButtonStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  margin-top:2rem;
  gap: 8px;

  width: 100%;
  height: 38px;
  background: #1570ef;
  border: 1px solid #1570ef;
  border-radius: 8px;
  #btn__submit {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
    background:none;
    border:none;
  }
`;
