import './App.css';
import { useState, useEffect, createContext } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import SurveyList from './Components/survey-list';
import Preview from "./Components/preview"
export const ThemeContext = createContext()

function App() {

  const [themes, setThemes] = useState([])
  const [first, setFirst] = useState(0)
  const value = { themes, setThemes, first, setFirst }
  console.log(themes)
  return (
    <ThemeContext.Provider value={value} >
      <div className="App">
        <BrowserRouter>
        <Header />
        <Sidebar />
          <Routes>
            <Route path="/" element={<SurveyList />} />
            <Route path="/preview" element={<Preview />} />
          </Routes>
        </BrowserRouter>

      </div>
    </ThemeContext.Provider>

  );
}

export default App;
