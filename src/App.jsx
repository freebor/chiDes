import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { HomePages } from "./pages/HomePages";
import { AboutPage } from "./pages/AboutPage";
import { NavBar } from "./component/header/NavBar";
import { Footer } from "./component/footer/Footer";
import { ABOUT, HOME } from "./utilities/routes";

function App() {
  return(
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path={HOME} element={<HomePages />}/>
          <Route path={ABOUT} element={<AboutPage />}/>
        </Routes>        
      </Router>
      <Footer />
    </>
  )
}

export default App;
