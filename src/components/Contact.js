import React from "react";
import { FormWrapper, HeadingStyle, NameStyle, Wrapper } from "./ContactStyle";

export const Contact = () => {
  return (
    <div>
      <HeadingStyle>
        <div>Contact Me</div>
        <div>
          Hi there, contact me to ask me about anything you have in mind.
        </div>
      </HeadingStyle>
      <div>
        <form>
          <NameStyle>
            <div>
              <div>
                <label for="first_name">First name</label>
                <input
                  type="text"
                  id="first_name"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div>
                <label for="last_name">Last name</label>
                <input
                  type="text"
                  id="last_name"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>
          </NameStyle>
          <div>
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="yourname@email.com"
              required
            />
          </div>
          <div>
            <label for="message">Message</label>
            <textarea
              type="text"
              id="message"
              placeholder="Send me a message and i'll reply you as soon as possible"
              required
            />
          </div>
          <div>
            <label for="privacy">
              You agree to provide your data to {} who may contact you
            </label>
            <input type="checkbox" id="privacy" value="privacy" required />
          </div>
          <button id="btn__submit">Send message</button>
        </form>
      </div>
    </div>
  );
};
