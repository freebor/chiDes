import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { HomePages } from "./pages/HomePages";
import { HOME, ABOUT, } from "./utilities/routes";

function App() {
  return(
    <Router>
      <Routes>
        <Route path={HOME} element={<HomePages />}/>      
      </Routes>        
    </Router>
  )
}

export default App;
