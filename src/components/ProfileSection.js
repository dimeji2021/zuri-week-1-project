import avatar from "../assets/kehinde.jpg";
import { ImageStyle, MainProfileWrapper, TitleStyle } from "./ProfileSectionStyles";


export const ProfileSection = () => {

    return (
        <MainProfileWrapper>
                <img src={avatar}  alt="profile-img" id="ImageStyle" />
            <TitleStyle>  Kehinde Aregbesola </TitleStyle>
        </MainProfileWrapper>

    )
}
