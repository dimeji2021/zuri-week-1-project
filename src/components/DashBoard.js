import { ProfileSection } from "./ProfileSection";
import { LinkSection } from "./LinkSection";
import { SocialSection } from "./SocialSection";
import { Footer } from "./Footer";
import { AppStyles } from "../AppStyles";

export const DashBoard = () => {
  return (
    <>
      <AppStyles>
        <ProfileSection />
        <LinkSection />
        <SocialSection />
      </AppStyles>
      <Footer />
    </>
  );
};
