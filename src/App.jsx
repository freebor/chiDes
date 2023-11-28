import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { HomePages } from "./pages/HomePages";
import { HOME, ABOUT, } from "./utilities/routes";

function App() {
  return(
    <>
      <Router>
        <Routes>
          <Route path={HOME} element={<HomePages />}/>
          <Route path={HOME} element={<ContactPages />}/>
        </Routes>        
      </Router>
    </>
  )
}

export default App;
