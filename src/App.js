import { Route, Routes } from "react-router-dom";
import { Contact } from "./components/Contact";
import { DashBoard } from "./components/DashBoard";
import { Footer } from "./components/Footer";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashBoard />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </>
  );
}

export default App;
