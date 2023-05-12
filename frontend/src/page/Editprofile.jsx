import "./Loginsignup.css"
import { Link } from "react-router-dom";
import  axios from "axios"
import { useState } from "react";
export const Edit = () => {
    const [name, setName] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirm, setConfirm] = useState()

    const Catch1 = (event) => {
        setName(event.target.value);
    }
    const Catch2 = (event) => {
        setEmail(event.target.value);
    }
    const Catch3 = (event) => {
        setPassword(event.target.value);
    }
    const Catch4 = (event) => {
        setConfirm(event.target.value);
    }
    const user_id = "645212a1c122f09ee4e37e59"
    const Uptade = () => {
            if(password === confirm){
        const res = axios.put(`https://fk-three.vercel.app/user/${user_id}`,{
            username : name,
            email: email,
            password:password
        })
    }
    }
    return <div className="SignupBackground" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
    <div className="full1">
      <div className="title1">Edit your profile</div>
      <div className="fullinput">
        <div className="holder">Username</div>
        <input onChange={Catch1} className="inpat" type="text" placeholder="Sumber" />
      </div>
      <div className="fullinput">
        <div className="holder">Email</div>
        <input onChange={Catch2} className="inpat" type="text" placeholder="Sumber@gmail.com" />
      </div>
      <div className="fullinput">
        <div className="holder">Password</div>
        <input onChange={Catch3} className="inpat" type="text" placeholder="Sumber1234" />
      </div>
      <div className="fullinput">
        <div className="holder">Confirm your password</div>
        <input onChange={Catch4} className="inpat" type="text" placeholder="Sumber1234" />
      </div>
      <Link to={"/"}><input className="button" onClick={Uptade} type="button" value={"Uptade"} /></Link>
      <div style={{display:"flex",justifyContent:'center',alignItems:"center",flexDirection:'row'}}>
        
      </div>
        <Link to={"/"}><input className="button" type="button" value={"Go back to home"} /></Link>
    </div>
    </div>
  };

