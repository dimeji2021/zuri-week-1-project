import {
  Button,
  Email,
  EmailInput,
  Input,
  Label,
  MainWrapper,
  MessageInput,
  MessageLabel,
  Name,
  FormWrapper,
  Heading,
  SupportingText,
  NameRow,
  EmailStyle,
  CheckBoxStyle,
  SubWrapper,
  HeaderStyle,
  CheckBoxLabel,
  CheckBox,
} from "./ContactStyle";
export const Contact = () => {
  return (
    <MainWrapper>
      <SubWrapper>
        <HeaderStyle>
          <Heading> Contact Us</Heading>
          <SupportingText>
            Hi there, contact me to ask me about anything you have in mind.
          </SupportingText>
        </HeaderStyle>
        <FormWrapper>
          <NameRow>
            <Name>
              <Label for="first_name">First name</Label>
              <Input
                type="text"
                placeholder="Enter your first name"
                id="first_name"
              />
            </Name>
            <Name>
              <Label for="last_name">Last name</Label>
              <Input
                type="text"
                placeholder="Enter your last name"
                id="last_name"
              />
            </Name>
          </NameRow>
          <EmailStyle>
            <Email for="email">Email</Email>
            <EmailInput
              type="text"
              placeholder="yourname@email.com"
              id="email"
            />
          </EmailStyle>
          <div>
            <MessageLabel for="message">Message</MessageLabel>
            <MessageInput
              type="text"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id="message"
            />
          </div>
          <CheckBoxStyle>
            <CheckBox type="checkbox" name="cheese" id="cheese"></CheckBox>
            <CheckBoxLabel for="cheese">
              You agree to providing your data to Dimeji who may contact you.
            </CheckBoxLabel>
          </CheckBoxStyle>
          <Button type="button" id="btn__submit">
            Send message
          </Button>
        </FormWrapper>
      </SubWrapper>
    </MainWrapper>
  );
};
