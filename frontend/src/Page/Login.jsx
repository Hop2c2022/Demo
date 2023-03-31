
export const Login = () => {
    return <div className="SignupBackground" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
    <div style={{backgroundColor:"white",width:538,height:500,borderRadius:'8px',display:"flex",justifyContent:'center',alignItems:"center",flexDirection:'column'}} >
      <div ><img style={{width: 120}} src="logo.svg" alt="" /></div>
      <div style={{color:'#112D48',fontFamily:"Inter",fontSize:'20px',marginTop:"10px"}}>Log in</div>
      <div style={{color:"#829AB1", marginTop:"2%"}}>Fill in your details below and Log in</div>
        <div style={{margin:'10px'}}>
        <div style={{color:"black",marginBottom:'3px'}}>Email</div>
            <div><input style={{fontSize:"15px",paddingLeft:'20px',backgroundColor: "white",borderWidth:"1px",border:"solid" ,borderColor:"rgba(23, 78, 130, 0.15)",width:'440px',height:'45px',borderRadius: '8px'}} type="text" placeholder="Email" /></div>
          </div>
        <div style={{margin:'10px'}}>
        <div style={{color:"black",marginBottom:'3px'}}>Password</div>
            <div><input style={{fontSize:"15px", paddingLeft:'20px', backgroundColor: "white",borderWidth:"1px",border:"solid" ,borderColor:"rgba(23, 78, 130, 0.15)",width:'440px',height:'45px',borderRadius: '8px'}} type="text" placeholder="Password" /></div>
          </div>
        <div style={{margin:'15px'}}><button style={{fontsize:"25px",background: '#278740',height: '45px',borderRadius: '8px',width:'465.5px',color:'white',borderWidth:0}}>Login</button></div>
        <div style={{display:"flex",justifyContent:'center',alignItems:"center",flexDirection:'row'}}>
          <div style={{color:"#829AB1"}}>Don't Haven An Account?</div>
          <div style={{marginLeft:'10px',fontWeight:700,textDecorationLine:'underline',cursor:"pointer"}}>Signup Now</div>
        </div>
      </div>
    </div>
  };