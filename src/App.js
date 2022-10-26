import { AppStyles } from "./AppStyles";
import { Footer } from "./components/Footer";
import { LinkSection } from "./components/LinkSection";
import { ProfileSection } from "./components/ProfileSection";
import { SocialSection } from "./components/SocialSection";

function App() {
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
}

export default App;


