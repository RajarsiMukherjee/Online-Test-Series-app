import logo from './logo.svg';
import './App.css';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Instruction from './Components/Instruction/Instruction';

function App() {
  return (
    <div className="App">
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
        <Route path="/instruction" element={<Instruction/>}/>
      </Routes>
         
    </div>
  );
}

export default App;
