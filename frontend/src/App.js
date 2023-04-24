import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {  Home } from "./page/Home";
import{Login} from "./page/Login"
import{SignUp} from "./page/Signup"
import{Createproject} from "./page/Createproject"
import{Createclass} from "./page/Createclass"
import { Editprofile } from "./page/Editprofile";
import { Check } from "./page/Check";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/createproject" element={<Createproject />}></Route>
          <Route path="/createclass" element={<Createclass />}></Route>
          <Route path="/editprofile" element={<Editprofile />}></Route>
          <Route path="/check" element={<Check />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;