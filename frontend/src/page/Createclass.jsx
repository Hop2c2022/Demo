import "./Create.css"
import { Link } from "react-router-dom";
import  axios from "axios"
import { useState } from "react";
import {Navbar} from "../components/Navbar"

export const Createclass = () => {
  const [ classname, setClassname ] = useState()
  const [ password, setPassword ] = useState()

  const Change1 = (event) => {
    setClassname(event.target.value);
  };
  const Change2= (event) => {
    setPassword(event.target.value);
  };
  const Createclass = async () => {
    const admin = "645212a1c122f09ee4e37e59";
    const result = axios.post(`https://fk-three.vercel.app/class/${admin}`,{
      classname : classname,
      password: password
    })
  }
    return <div className="Back" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
      <Navbar/>
        <div className="full2">
            <div style={{margin:"5%"}} className="title1">Create class</div>
        <div className="fullinput">
          <div className="holder">Class name</div>
          <input className="inpat" type="text" onChange={Change1} placeholder="Enter your class name" />
        </div>
        <div className="fullinput">
          <div className="holder">Class password</div>
          <input className="inpat" type="text" onChange={Change2} placeholder="Enter the class password" />
        </div>
        <input onClick={Createclass} className="button" type="button" value={"Create class"} />
        <Link to={"/"}><input className="button" type="button" value={"Go back to home"} /></Link>
        </div>  
    </div>
  };