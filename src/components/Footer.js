import leftlogo from "../assets/leftlogo.svg";
import rightlogo from "../assets/rightlogo.svg";
import { FooterStyle } from "./FooterStyle";


export const Footer = () => {
    return (
        <FooterStyle>
            <img src={leftlogo} alt="slack-logo" />
            <span>HNG Internship 9 Frontend Task</span>
            <img src={rightlogo} alt="github-logo" />
        </FooterStyle>
    )
}
