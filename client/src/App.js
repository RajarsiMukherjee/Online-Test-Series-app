import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Mocktest from './Components/Mocktest/Mocktest';
import Instruction from './Components/Instruction/Instruction';
import Test from './Components/Test';
import Result from './Components/Result/Result';
import Header from './Components/Header/Header';
 
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>

      <Routes>
         <Route path="/login" element={<Login />}/>
       </Routes>
       <Routes>
        <Route path="/register" element={<Register />} />
      </Routes>

      <Routes>
        <Route path="/instruction" element={<Instruction />}/>
      </Routes>

      <Routes>
        <Route path="/mocktest" element={<Mocktest />}/>
      </Routes>

      <Routes>
        <Route path="/test" element={<Test />}/>
      </Routes>
      <Routes>
        <Route path="/result" element={<Result />}/>
      </Routes>
         
    </div>
  );
}

export default App;
