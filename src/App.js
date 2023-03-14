import NavigationBar from "./components/NavigationBar";
import HomePage from "./pages/Home";
import WorkExperience from "./pages/Work";
import SkillsPage from "./pages/Skills";
import ContactInformation from "./pages/Contact";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavigationBar></NavigationBar>
        <Routes>
          <Route path="/Home" element={<HomePage />}></Route>
          <Route path="/Work" element={<WorkExperience />}></Route>
          <Route path="/Skill" element={<SkillsPage />}></Route>
          <Route path="/Contact" element={<ContactInformation />}></Route>
        </Routes>
      </div>

      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;

// ?import all files above first
// ? add browserrouter > routes > and route before linking the filename for the pages
// ? browserrouter > routes > and route will display the pages one at a time inside the Routes tag

// ! watch this video for changing color theme: https://www.youtube.com/watch?v=crDo77iOdW8

// ! change theme switcher https://www.youtube.com/watch?v=fyuao3G-2qg&t=12s
