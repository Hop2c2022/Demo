

import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp } from "./Page";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
        </Routes>
      </BrowserRouter>
  );
}

export default App;