import avatar from "../assets/kehinde.jpg";
import sharedbutton from "../assets/sharedbutton.svg";

import { MainProfileWrapper, SharedButton, TitleStyle } from "./ProfileSectionStyles";


export const ProfileSection = () => {

    return (
        <MainProfileWrapper>
            <SharedButton>
            <img src={sharedbutton} alt="sharedbutton" id="sharedButton" />
            </SharedButton>
            <img src={avatar} alt="profile-img" id="ImageStyle" />
            <TitleStyle>  Kehinde Aregbesola </TitleStyle>
        </MainProfileWrapper>

    )
}
