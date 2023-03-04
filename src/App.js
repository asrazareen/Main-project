import './App.css';
import { useState, useEffect, createContext } from 'react';
import { Routes, Route, BrowserRouter } from "react-router-dom"
import Header from './Components/Header';
import Sidebar from './Components/Sidebar';
import SurveyList from './Components/survey-list';
import Preview from "./Components/preview"
import Login from './Components/LogIn/Login';
import Register from './Components/Register/Register';
import SurveyForm from './Components/survey-form';
import List from './Components/Survey/List.jsx';

export const ThemeContext = createContext()



function App() {

  const [themes, setThemes] = useState([])
  const [first, setFirst] = useState(0)
  const formdata = new FormData()
  const questionData = new FormData()

  const value = { themes, setThemes, first, setFirst,formdata,questionData }

    formdata.forEach((val, key) => {
        console.log(val, key)
    })
  console.log(themes)
  return (
    <ThemeContext.Provider value={value}  >
      <div className="App">

        <BrowserRouter>
        <Header/>
        <Sidebar/>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path="/register" element={<Register />} />

              <Route path="/main" element={<SurveyList />} />
              <Route path="/surveyForm" element={<List />} />
              <Route path="/preview" element={<Preview />} />
              <Route path="/form" element={<SurveyForm />} />
         

          </Routes>
        </BrowserRouter>

      </div>
    </ThemeContext.Provider>

  );
}

export default App;
