import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

export const Login = () => {

  const navigate = useNavigate();

  const checkUser = () => {
    const user = localStorage.getItem("user");
    // if (user) navigate("/");
  };

  useEffect(() => {
    checkUser();
  }, []);
  const [wrongm, setWrongm] = useState(false);
  const [tokenn, setTokenn] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [passValue, setPassValue] = useState("");
  // const [token, setToken] = useState()

  const dataRetriever = async () => {
    console.log("tokenn", tokenn);
    const res = await axios({
      url: `http://localhost:8000/login`,
      method: "POST",
      data: {
        email: emailValue,
        password: passValue,
      },
      headers: {
        authorization: `Bearer ${tokenn}`,
      },
    }).then((response) => {
      console.log(response?.data[1]);
      if (
        response?.data == "Invalid password or email" ||
        response?.data == "You don't have any user account, please sign up" ||
        response?.data == null ||
        response?.data[1] == null
      ) {
        setWrongm(true);
      } else {
        const token = response?.data[1];
        localStorage.setItem("token", token);
        localStorage.setItem("user", response?.data[0]);
        sessionStorage.setItem("token", JSON.stringify(token));

        console.log(response?.data);
        setTokenn(response?.data[1]);
        const myHeaders = new Headers();
        myHeaders.append("authorization", token);

      }
    });
  }

    return <div className="SignupBackground" style={{width:"100vw",height:'100vh', display:"flex",justifyContent:'center',alignItems:"center"}}>
      <div className="full2">
        <div className="title1">Sign in</div>
        <div className="title2">Fill in your details below and Sign in</div>
        {wrongm ? (
          <div
            class="flex mt-8 p-4 mb-4 text-red-700 bg-red-100 rounded-lg dark:bg-gray-800 dark:text-red-400"
            role="alert">
            <svg
              aria-hidden="true"
              class="flex-shrink-0 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"></path>
            </svg>
            <span class="sr-only">Info</span>
            <div class="ml-3 text-sm font-medium">WRONG EMAIL OR PASSWORD</div>
          </div>
        ) : null}
        <div className="fullinput">
          <div className="holder">Email</div>
          <input className="input" type="text" placeholder="Sumber@gmail.com" />
        </div>
        <div className="fullinput">
          <div className="holder">Password</div>
          <input className="input" type="text" placeholder="Sumber1234" />
        </div>
        <input onClick={dataRetriever} className="button" type="button" value={"Sign in"} />
        <div style={{display:"flex",justifyContent:'center',alignItems:"center",flexDirection:'row'}}>
          <div className="bottom" style={{color:"#829AB1"}}>Don't Have An Account?</div>
          <div className="bottom" style={{marginLeft:'1vh',fontWeight:700,cursor:"pointer"}}> <Link style={{color:"black",textDecorationLine:'none'}} to={'/Signup'}>Signup Now</Link> </div>
        </div>
        <div style={{width:"87%"}}>
          <Link to={"/"}>
            <button className="backButton">
            <h2>Go back to home</h2>
          </button>
          </Link>
        </div>
      </div>

    </div>
  };