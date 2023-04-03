import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  Home } from "./page/Home";
import{Login} from "./page/Login"
import{SignUp} from "./page/Signup"

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;