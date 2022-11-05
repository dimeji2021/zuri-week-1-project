import React from "react";
import { AppStyles } from "../AppStyles";
import {
  ButtonStyle,
  CheckBoxStyle,
  EmailStyle,
  FormWrapper,
  HeadingStyle,
  MessageStyle,
  NameStyle,
  Wrapper,
} from "./ContactStyle";
import { Footer } from "./Footer";

export const Contact = () => {
  return (
    <>
      <Wrapper>
        <HeadingStyle>
          <div className="heading">Contact Me</div>
          <div className="SupportingText">
            Hi there, contact me to ask me about anything you have in mind.
          </div>
        </HeadingStyle>
          <FormWrapper>
        <form>
            <NameStyle>
              <div className="firstname">
                <label for="first_name">First name</label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="lastname">
                <label for="last_name">Last name</label>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </NameStyle>
            <EmailStyle>
              <label for="email" className="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="yourname@email.com"
                required
              />
            </EmailStyle>
            <MessageStyle>
              <label for="message" className="message">
                Message
              </label>
              <textarea
                type="text"
                id="message"
                placeholder="Send me a message and i'll reply you as soon as possible"
                required
              />
            </MessageStyle>
            <CheckBoxStyle>
              <input type="checkbox" id="privacy" value="privacy" required />
              <label for="privacy" className="checkbox">
                You agree to provide your data to {} who may contact you
              </label>
            </CheckBoxStyle>
          <ButtonStyle>
            <button id="btn__submit">Send message</button>
          </ButtonStyle>
        </form>
          </FormWrapper>
      </Wrapper>
      <Footer/>
    </>
  );
};
