import styled from "styled-components";
export const Heading = styled.div`
  width: 448px;
  height: 44px;
  /* Display md/Semibold */
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  /* identical to box height, or 122% */
  letter-spacing: -0.02em;
  /* Gray/900 */
  color: #101828;
`;
export const SupportingText = styled.div`
  /* Text xl/Normal */
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  color: #475467;
`;
export const Label = styled.label`
  width: 71px;
  height: 20px;
  /* Text sm/Medium */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  /* Gray/700 */
  color: #344054;
`;
export const Input = styled.input`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  gap: 8px;
  width: 348px;
  height: 44px;
  /* text placeholer */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* Base/White */
  background: #ffffff;
  /* Gray/300 */
  border: 1px solid #d0d5dd;
  /* Shadow/xs */
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
`;
export const Name = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;
  width: 348px;
  height: 70px;
`;
export const NameRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 100%;
  height: 70px;
  /* @media only screen and (max-width: 600px) {
    flex-direction: column;
  } */
`;
export const Email = styled.label`
  width: 36px;
  height: 20px;
  /* Text sm/Medium */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  /* Gray/700 */
  color: #344054;
`;
export const EmailInput = styled.input`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 14px;
  gap: 8px;
  width: 100%;
  height: 44px;
  /* text placeholer */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* Base/White */
  background: #ffffff;
  /* Gray/300 */
  border: 1px solid #d0d5dd;
  /* Shadow/xs */
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
`;
export const EmailStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 6px;
  width: 100%;
  height: 70px;
`;
export const MessageLabel = styled.label`
  width: 61px;
  height: 20px;
  /* Text sm/Medium */
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* identical to box height, or 143% */
  /* Gray/700 */
  color: #344054;
`;
export const MessageInput = styled.textarea`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 12px 14px;
  gap: 8px;
  width: 720px;
  height: 132px;
  /* text placeholer */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* Base/White */
  background: #ffffff;
  /* Gray/300 */
  border: 1px solid #d0d5dd;
  /* Shadow/xs */
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
`;
export const CheckBox = styled.input.attrs({ type: "checkbox" })`
  box-sizing: border-box;
  width: 20px;
  height: 20px;
  /* Base/White */
  background: #ffffff;
  /* Gray/300 */
  border: 1px solid #d0d5dd;
  border-radius: 6px;
`;
export const CheckBoxLabel = styled.label`
  width: 688px;
  height: 24px;
  /* Text md/Normal */
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  /* Gray/600 */
  color: #475467;
`;
export const CheckBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 12px;
  width: 100%;
  height: 24px;
`;
export const Button = styled.button`
  box-sizing: border-box;
  /* Auto layout */
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  width: 100%;
  height: 48px;
  /* Placeholder*/
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */
  /* Base/White */
  color: #ffffff;
  /* Primary/600 */
  background: #1570ef;
  /* Primary/600 */
  border: 1px solid #1570ef;
  /* Shadow/xs */
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
`;
export const SubWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  width: 100%;
  height: 616px;
`;
export const HeaderStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 48px;
  width: 100%;
  height: 616px;
`;
export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 32px;
`;
export const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 64px 0px 96px;
  gap: 64px;
  width: 75%;
  margin-left: auto;
`;
