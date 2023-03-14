import { useState } from "react";
import './index.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage value={{name:'Missing Persons', description: 'This search engine is dedicated to search Missing Persons.'}} />} />
          <Route path="/accidentalDeaths" element={<LandingPage value={{name:'Accidental Deaths', description: 'This search engine is dedicated to search Accident victims, Missing /Found Persons and Unidentified Dead Bodies.'}} />} />
          <Route path="/womanHelpDesk" element={<LandingPage value={{name:'Woman Help Desk', description: 'This search engine is dedicated to help out woman in need who is facing any kind of mistreatment or injustice'}} />} />

        </Routes>
      </Router>
    </div>
  );
}

export default App;
