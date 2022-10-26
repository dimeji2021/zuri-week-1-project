import avatar from "../assets/kehinde.jpg";
import sharedbutton from "../assets/sharedbutton.png";

import { MainProfileWrapper, TitleStyle } from "./ProfileSectionStyles";


export const ProfileSection = () => {

    return (
        <MainProfileWrapper>
            <img src={sharedbutton} alt="sharedbutton" id="sharedButton" />
            <img src={avatar} alt="profile-img" id="ImageStyle" />
            <TitleStyle>  Kehinde Aregbesola </TitleStyle>
        </MainProfileWrapper>

    )
}
