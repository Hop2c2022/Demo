import { Link } from "react-router-dom";
import {Navbar} from "../components/Navbar"
export const SignUp = () => {
    return <div className="SignupBackground" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
      <Navbar/>
      <div style={{backgroundColor:"white",width:538,height:600,borderRadius:'8px',display:"flex",justifyContent:'center',alignItems:"center",flexDirection:'column'}} >
        <div ><img style={{width: 120}} src="logo.svg" alt="" /></div>
        <div style={{color:'#112D48',fontFamily:"Inter",fontSize:'20px',marginTop:"10px"}}>Sign Up</div>
        <div style={{color:"#829AB1", marginTop:"2%"}}>Fill in your details below and Sign up</div>
          <div style={{margin:'10px'}} >
            <div style={{color:"black",marginBottom:'3px'}}>Username</div>
            <div><input style={{fontSize:"15px",paddingLeft:'20px',backgroundColor: "white",borderWidth:"1px",border:"solid" ,borderColor:"rgba(23, 78, 130, 0.15)",width:'440px',height:'45px',borderRadius: '8px'}} type="text" placeholder="Username" /></div>
          </div>
          <div style={{margin:'10px'}}>
          <div style={{color:"black",marginBottom:'3px'}}>Email</div>
            <div><input style={{fontSize:"15px",paddingLeft:'20px',backgroundColor: "white",borderWidth:"1px",border:"solid" ,borderColor:"rgba(23, 78, 130, 0.15)",width:'440px',height:'45px',borderRadius: '8px'}} type="text" placeholder="Email" /></div>
          </div>
          <div style={{margin:'10px'}}>
          <div style={{color:"black",marginBottom:'3px'}}>Password</div>
            <div><input style={{fontSize:"15px", paddingLeft:'20px', backgroundColor: "white",borderWidth:"1px",border:"solid" ,borderColor:"rgba(23, 78, 130, 0.15)",width:'440px',height:'45px',borderRadius: '8px'}} type="text" placeholder="Password" /></div>
          </div>
          <div style={{margin:'15px'}}><button style={{fontsize:"25px",background: '#278740',height: '45px',borderRadius: '8px',width:'465.5px',color:'white',borderWidth:0,cursor: 'pointer'}}> Create account</button></div>
          <div style={{display:"flex",justifyContent:'center',alignItems:"center",flexDirection:'row'}}>
            <div style={{color:"#829AB1"}}>Already Haven An Account?</div>
            <div style={{marginLeft:'10px',fontWeight:700,textDecorationLine:'underline',cursor:"pointer"}}> <Link to={'/Login'} style={{color:"black"}} > Login Now </Link></div>
          </div>
        </div>
      </div>
  };