import { AppStyles } from "./AppStyles";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { LinkSection } from "./components/LinkSection";
import { ProfileSection } from "./components/ProfileSection";
import { SocialSection } from "./components/SocialSection";

function App() {
  return (
    <>
      {/* <AppStyles>
        <ProfileSection />
        <LinkSection />
        <SocialSection />
      </AppStyles>
      <Footer /> */}
      <Contact/>
    </>
  );
}

export default App;


