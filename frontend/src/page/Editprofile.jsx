import { Link } from "react-router-dom";
import "./Edit.css"
export const Editprofile = () => {
    return <div className="Back" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
              <div className="full2">
            <div  className="title1">Edit profile</div>
        <div className="fullinput">
          <div className="holder">Username</div>
          <input className="input" type="text" placeholder="Enter new name" />
        </div>
        <div className="fullinput">
          <div className="holder">Password</div>
          <input className="input" type="text" placeholder="Enter new password" />
        </div>        <div className="fullinput">
          <div className="holder">Email</div>
          <input className="input" type="text" placeholder="Enter new email" />
        </div>
        <input className="button" type="button" value={"Save"} />
        </div> 
    </div>
  };        