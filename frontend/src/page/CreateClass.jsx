import "./Loginsignup.css"
import { Link } from "react-router-dom";

export const CreateClass = () => {
    return <div className="Back" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
        <div className="full2">
            <div style={{margin:"5%"}} className="title1">Create class</div>
        <div className="fullinput">
          <div className="holder">Class name</div>
          <input className="inpat" type="text" placeholder="Enter your class name" />
        </div>
        <div className="fullinput">
          <div className="holder">Class password</div>
          <input className="inpat" type="text" placeholder="Enter the class password" />
        </div>
        <input className="button" type="button" value={"Create class"} />
        <Link style={{marginRight:"5%"}} to={"/"}>
            <input className="button" type="button" value={"Back to home"}/>
        </Link>
        </div>  
    </div>
  };