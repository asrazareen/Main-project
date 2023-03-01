import './App.css';
import {BrowserRouter , Routes ,Route} from 'react-router-dom';
import Login from './components/LogIn/Login';
import Register from './components/Register/Register';
import SurveyList from './components/Survey/SurveyList';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/survey' element={<SurveyList/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;