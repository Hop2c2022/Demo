import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login, SignUp, Home } from "./page";
import { Profile} from "./page/Profile"
import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { Classinformation } from "./page/Classinformation";
import { Addmember } from "./page/Addmember";
import { HomeProjectbox } from "./page/HomeProjectbox";
import { Upload } from "./page/Upload";
import { Createclass } from "./page/Createclass";
import { Class } from "./page/Class";
import { Createproject } from "./page/Createproject";
import { Create } from "./page/Createin";

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
          <Route path="/class" element={<Class />}/>
          <Route path="/profile" element={<Profile />}/>
          <Route path="/classinformation" element={<Classinformation />}/>
          <Route path="/addmember" element={<Addmember />}/>
          <Route path="/upload" element={<Upload />}/>
          <Route path="/homeProjectbox" element={<HomeProjectbox />}/>
          <Route path="/createclass" element={<Createclass />}/>
          <Route path="/class" element={<Class />}/>
          <Route path="/createproject" element={<Createproject />}/>
          <Route path="/create" element={<Create />}/>

        </Routes>
      </BrowserRouter>
        </ul>
      )}
    </>
  );
}
