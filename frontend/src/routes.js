import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, Home } from "./page";
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";

export const Router = () => {
  const [data, setData] = useState([]);
  const [done, setDone] = useState(undefined);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.json())
        .then((json) => {
          console.log(json);
          setData(json);
          setDone(true);
        });
    }, 1000);
  }, []);

  return (
    <>
      {!done ? (
        <div className="loading">
            <ReactLoading
          type={"bars"}
          color={"#67eb7f"}
          width={150}
        />
        </div>
        
      ) : (
        <ul>
         <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
        </ul>
      )}
    </>
  );
}
