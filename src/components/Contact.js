
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
  TickBox,
  TickBoxLabel,
  FormWrapper,
  Heading,
  SupportingText,
  NameRow,
  EmailStyle,
  CheckBoxStyle,
  SubWrapper,
  HeaderStyle,
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
              <Label for="username">First name</Label>
              <Input
                type="text"
                placeholder="Enter your first name"
                id="username"
              />
            </Name>
            <Name>
              <Label for="username">Last name</Label>
              <Input
                type="text"
                placeholder="Enter your last name"
                id="username"
              />
            </Name>
          </NameRow>
          <EmailStyle>
            <Email for="username">Email</Email>
            <EmailInput
              type="text"
              placeholder="yourname@email.com"
              id="username"
            />
          </EmailStyle>
          <div>
            <MessageLabel for="username">Message</MessageLabel>
            <MessageInput
              type="text"
              placeholder="Send me a message and I'll reply you as soon as possible..."
              id="username"
            />
          </div>
          <CheckBoxStyle>
            <TickBox type="checkbox" name="cheese" id="cheese"></TickBox>
            <TickBoxLabel for="cheese">
              You agree to providing your data to Dimeji who may contact you.
            </TickBoxLabel>
          </CheckBoxStyle>
          <Button type="button">Send message</Button>
        </FormWrapper>
      </SubWrapper>
    </MainWrapper>
  );
};